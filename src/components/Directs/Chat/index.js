import React, { useState, useEffect } from "react";
import "./css.css";
import Comment from "components/InputChat";
import verify from "img/verify.svg";
import getChatUser from "components/services/getChatUser";
import sendMessage from "components/services/sendMessage";
import Loading from "components/Loading";
import laptop from "img/laptop.svg";

export default function Chat(props) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (props.direct !== null) {
      const arr_msg = getChatUser("default", props.direct.user, props.directs);
      if (arr_msg === "none") {
        props.addChat("default", props.direct.user);
        setMessages([]);
      } else setMessages(arr_msg);
    }
  }, [messages, props]);

  const handleSendMessage = async (message) => {
    const chat = sendMessage(
      "default",
      props.direct.user,
      message,
      props.directs,
      props.setDirects
    );
    if (chat) setMessages(null);
  };

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
        <div className="content-header-chat" to={"/" + props.direct.user}>
          <img
            className="chat-user-img"
            src={props.direct.picture}
            alt="user-img"
          />
          <p className="chat-user-name">{props.direct.user}</p>
          {props.direct.verify && (
            <img className="verify" src={verify} alt="Verificado" />
          )}
        </div>
      </header>
      <div className="chat-content-messages">
        {messages &&
          messages.map((m, i) =>
            m.own ? (
              <div key={i} className="content-chat-message own">
                <div className="chat-message own">{m.message}</div>
              </div>
            ) : (
              <div key={i} className="content-chat-message">
                <div to={"/" + props.direct.user}>
                  <img
                    className="chat-user-img"
                    src={props.direct.picture}
                    alt="user-img"
                  />
                </div>
                <div className="chat-message">{m.message}</div>
              </div>
            )
          )}
      </div>
      {messages === null && <Loading />}
      <div className="chat-content-comment">
        <Comment send={handleSendMessage} message />
      </div>
    </div>
  );
}
