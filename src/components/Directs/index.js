import React, { useState, useEffect, useContext } from "react";
import getDirects from "components/services/getDirects";
import Loading from "components/Loading";
import Direct from "./Direct";
import newMessage from "img/message.svg";
import Chat from "./Chat";
import New from "./New";
import history from 'img/history.svg';
import Search from './Search';

import "./css.css";

import getUserMin from "components/services/getUserMin";

import Context from "components/Context/AppContext";
import setDirectsRead from "components/services/setDirectsUnread";
import addDirectChat from "components/services/addDirectChat";

export default function Directs() {
  const [data, setData] = useState("loading");

  const [viewDirect, setViewDirect] = useState(null);

  const [user, setUser] = useState(null);

  const [newChat, setNewChat] = useState(false);

  const { directs, setDirects } = useContext(Context);

  const handleSetViewDirect = (user) => {
    if (user === null) setViewDirect(null);
    else {
      setViewDirect(user);
      setDirectsRead("default", user.user, directs, setDirects);
    }
  };

  const handleAddChat = (user, user_follow) => {
      addDirectChat(user, user_follow, directs, setDirects);
  }

  useEffect(() => {
    if (data === "loading") {
      const user = getUserMin("default");
      setUser(user);
      const directs_ = getDirects("default", directs);
      if(directs_) setData(directs_.directs);
      else setData([]);
    }
  }, [data, directs]);

  if (data === "loading") return <Loading />;

  if (newChat)
    return (
      <div className="content-directs">
        <New user="default" setNewChat={setNewChat} setViewDirect={handleSetViewDirect} />
      </div>
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
        <header className="content-directs-header">
          <div className="center-width header">
            <img className="directs-header-img" src={user.picture} alt="your img" />
            <div className="content-actions-header">
              <img 
              className="icon"
              src={history}
              alt="history"/>
              <img
                onClick={() => {
                  setNewChat(true);
                }}
                className="icon"
                src={newMessage}
                alt="nuevo mensaje"
              />
              <div className="menu">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
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
                return (
                  <Direct
                    key={i}
                    user={user.user}
                    picture={user.picture}
                    verify={user.verify}
                    message={d.messages[d.messages.length - 1].message}
                    time={d.messages[d.messages.length - 1].time}
                    read={d.read}
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
      />
    </div>
  );
}
