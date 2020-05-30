import React, { useState, useEffect } from "react";
import "./css.css";
import Comment from "components/InputChat";
import getChatUser from "components/services/getChatUser";
import sendMessage from "components/services/sendMessage";
import Loading from "components/Loading";
import laptop from "img/laptop.svg";
import search from "img/search.svg";
import clip from "img/clip.svg";
import Message from "./Message";
import Day from "./Day";
import ProfileContact from "components/ProfileContact";
import Options from "../Options";

export default function Chat(props) {
  const [messages, setMessages] = useState(null);

  const [showProfile, setShowProfile] = useState(false);

  const compareDate = (date_message, date) => {
    const date_msg = new Date(date_message);
    const date_origin = new Date(date);

    if (date_msg.getDate() !== date_origin.getDate()) {
      date = date_msg;
      return false;
    }
    return true;
  };

  const [showOptions, setShowOptions] = useState(false);

  const options = [
    {
      name: "Info. del contacto",
      action: () => setShowProfile(true)
    },
    {
      name: "Seleccionar mensajes",
      action: () => console.log('seleccionar mensajes'),
    },
    {
      name: "Silenciar notificaciones",
      action: () => console.log('Silenciar notificaciones'),
    },
    {
      name: "Vaciar mensajes",
      action: () => console.log('Vaciar mensajes'),
    },
    {
      name: "Eliminar chat",
      action: () => console.log('eliminar chat'),
    },
  ];


  const getMessages = () => {
    let arr_msg = [];
    if (messages) {
      for (let i = 0; i < messages.length; i++) {
        let date;
        if (i > 0) date = new Date(messages[i - 1].time);
        else date = new Date();

        if (!compareDate(messages[i].time, date))
          arr_msg.push(<Day key={i} time={messages[i].time} />);
        arr_msg.push(
          <Message
            key={i + messages[i].message}
            time={messages[i].time}
            message={messages[i].message}
            own={messages[i].own}
          />
        );
      }
    }
    return arr_msg;
  };

  useEffect(() => {
    if (props.direct !== null) {
      setShowProfile(false);
      const arr_msg = getChatUser("default", props.direct.user, props.directs);
      if (arr_msg === "none") {
        props.addChat("default", props.direct.user);
        setMessages([]);
      } else setMessages(arr_msg);
    }
  }, [messages, props]);

  const handleSendMessage = (message) => {
    const chat = sendMessage(
      "default",
      props.direct.user,
      message,
      props.directs,
      props.setDirects
    );
    if (chat) setMessages(null);
  };

  if (showProfile)
    return (
      <div className="content-chat">
        <ProfileContact
          back={() => setShowProfile(false)}
          name={props.direct.name}
          img={props.direct.picture}
          desc={props.direct.desc}
          user={props.direct.user}
          setShowPicture={props.setShowPicture}
        />
      </div>
    );

  if (props.direct === null) {
    return (
      <div className="content-chat pc">
        <div className="content-default">
          <div className="content-chat-default">
            <div className="content-chat-logo-default">
              <img
                className="chat-logo-default"
                src="https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg"
                alt="Direct"
              />
            </div>
            <p className="chat-title-default">Mantén tu telefono conectado</p>
            <p className="chat-desc-default">
              JuantsApp se conecta a tu teléfono para sincronizar los mensajes.
              Para reducir el consumo de tus datos, conecta tu teléfono a una
              red Wi-Fi.
            </p>
            <hr className="chat-line-default" />
            <p className="chat-desc-default">
              <span>
                <img
                  src={laptop}
                  alt="Laptop"
                  className="chat-icon-laptop-default"
                />
              </span>
              JuantsApp está disponible para Windows.
              <a className="chat-url-default" href="www.google.com">
                Obtenlo aquí.
              </a>
            </p>
          </div>
          <div className="chat-border-bottom"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="content-chat">
      <header className="content-header-chat">
        <div
          className="chat-back mobile"
          onClick={() => {
            setMessages(null);
            props.back(null);
          }}
        ></div>
        <div className="content-header-chat">
          <div className="header-chat">
            <div
              onClick={() => setShowProfile(true)}
              className="content-header-user"
            >
              <img
                className="chat-user-img"
                src={props.direct.picture}
                alt="user-img"
              />
              <p className="chat-user-name">{props.direct.name}</p>
            </div>
            <div className="content-actions-header">
              <img src={search} alt="search" className="icon" />
              <img src={clip} alt="clip" className="icon" />
              <div onClick={() => setShowOptions(!showOptions)} className={showOptions ? "content-menu menu-select" : "content-menu"}>
                <div className="menu">
                  <div className="point"></div>
                  <div className="point"></div>
                  <div className="point"></div>
                </div>
                <div className="content-options-header">
                  {showOptions && <Options options={options} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="chat-content-messages">
        <div className="center-width">{getMessages()}</div>
      </div>
      {messages === null && <Loading />}
      <div className="chat-content-comment">
        <Comment send={handleSendMessage} message />
      </div>
    </div>
  );
}
