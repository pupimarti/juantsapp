import React, { useState, useEffect } from "react";
import send from 'img/send.svg';
import emoji from 'img/emoji.svg';
import "./css.css";

export default function InputChat(props) {
  const [message, setMessage] = useState("");
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const [input, setInput] = useState(null);

  useEffect(() => {
      if(props.focus)
        input && input.focus();
  })

  const handleSend = () => {
    if(message.length > 0){
      props.send(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      handleSend();
  }

  return (
    <div className="message-post">
      <div className="center-width content-message">
        <img src={emoji} alt="emoji" className="icon-emoji-message" />
        <input
          ref={(i) => {setInput(i)}}
          className="message"
          value={message}
          onChange={handleChangeMessage}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un mensaje aquí"
        ></input>
          <img onClick={handleSend} src={send} alt="send" className="icon-send-message" />
      </div>
    </div>
  );
}
