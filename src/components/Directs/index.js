import React, { useState, useEffect, useContext } from "react";
import getDirects from "components/services/getDirects";
import Loading from "components/Loading";
import Direct from "./Direct";
import newMessage from "img/message.svg";
import Chat from "./Chat";
import New from "./New";
import Profile from "./Profile";
import history from "img/history.svg";
import Search from "./Search";
import SwitchMode from "components/SwitchMode";
import ShowPicture from "components/Directs/ShowPicture";

import "./css.css";

import getUserMin from "components/services/getUserMin";

import Context from "components/Context/AppContext";
import setDirectsRead from "components/services/setDirectsUnread";
import addDirectChat from "components/services/addDirectChat";
import Options from "./Options";

export default function Directs(props) {
  const [data, setData] = useState("loading");

  const [viewDirect, setViewDirect] = useState(null);

  const [user, setUser] = useState(null);

  const [newChat, setNewChat] = useState(false);

  const [profile, setProfile] = useState(false);

  const { directs, setDirects } = useContext(Context);

  const [showPicture, setShowPicture] = useState(null);

  const [showOptions, setShowOptions] = useState(false);

  const options = [
    {
      name: "Perfil",
      action: () => {
        setShowOptions(false);
        setProfile(true);
      },
    },
    {
      name: "Nuevo chat",
      action: () => {
        setShowOptions(false);
        setNewChat(true);
      },
    },
  ];

  const handleSetShowPicture = (user, img) => {
    setShowPicture({ user, img });
  };

  const handleSetViewDirect = (user) => {
    if (user === null) setViewDirect(null);
    else {
      setViewDirect(user);
      setDirectsRead("default", user.user, directs, setDirects);
    }
  };

  const handleAddChat = (user, user_follow) => {
    addDirectChat(user, user_follow, directs, setDirects);
  };

  useEffect(() => {
    if (data === "loading") {
      const user = getUserMin("default");
      setUser(user);
      const directs_ = getDirects("default", directs);
      if (directs_) setData(directs_.directs);
      else setData([]);
    }
  }, [data, directs]);

  if (data === "loading") return <Loading />;

  if (showPicture)
    return (
      <ShowPicture
        setShowPicture={setShowPicture}
        img={showPicture.img}
        user={showPicture.user}
      />
    );

  return (
    <div className="content-directs">
      <div
        className={
          viewDirect === null
            ? "content-list-directs"
            : "content-list-directs viewdirect"
        }
      >
        {newChat && (
          <New
            user="default"
            setNewChat={setNewChat}
            setViewDirect={handleSetViewDirect}
          />
        )}
        {profile && (
          <Profile
            handleSetShowPicture={handleSetShowPicture}
            setProfile={setProfile}
            user={user}
          />
        )}
        <header className="content-directs-header">
          <div className="center-width header">
            <img
              onClick={() => {
                setProfile(true);
              }}
              className="directs-header-img"
              src={user.picture}
              alt="your img"
            />
            <div className="content-actions-header">
              <SwitchMode setMode={props.setMode} />
              <img className="icon" src={history} alt="history" />
              <img
                onClick={() => {
                  setNewChat(true);
                }}
                className="icon"
                src={newMessage}
                alt="nuevo mensaje"
              />
              <div 
                  onClick={() => setShowOptions(!showOptions)} className={showOptions ? "content-menu menu-select" : "content-menu"}>
                <div
                  className="menu"
                >
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
          <Search />
        </header>
        <div className="content-directs-messages">
          {data &&
            data.map((d, i) => {
              const user = getUserMin(d.user);

              if (user !== null)
                if (d.messages.length > 0)
                  return (
                    <Direct
                      key={i}
                      user={user.user}
                      name={user.name}
                      picture={user.picture}
                      desc={user.desc}
                      message={d.messages[d.messages.length - 1].message}
                      time={d.messages[d.messages.length - 1].time}
                      own={d.messages[d.messages.length - 1].own}
                      unread={d.unread}
                      viewDirect={viewDirect}
                      onClick={handleSetViewDirect}
                    />
                  );
                else if (d.messages.length <= 0)
                  return (
                    <Direct
                      key={i}
                      user={user.user}
                      name={user.name}
                      picture={user.picture}
                      desc={user.desc}
                      message=""
                      time={null}
                      own={false}
                      unread={0}
                      viewDirect={viewDirect}
                      onClick={handleSetViewDirect}
                    />
                  );
              return null;
            })}
        </div>
      </div>
      <Chat
        direct={viewDirect}
        back={handleSetViewDirect}
        directs={directs}
        setDirects={setDirects}
        setNewChat={setNewChat}
        addChat={handleAddChat}
        setShowPicture={setShowPicture}
      />
    </div>
  );
}
