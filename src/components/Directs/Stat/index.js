import React, { useState } from "react";
import pencil from "img/edit.svg";
import confirm from "img/confirm.svg";
import "./css.css";

export default function Stat(props) {
  const [edit, setEdit] = useState(false);

  const handleEditUser = () => {
    if(props.edit(desc))
      setEdit(false);
  }

  const [desc, setDesc] = useState(props.desc);

  const keyDown = e => {
    if(desc.length >= props.max){
      if(e.keyCode === 8){
        let str = desc.substring(0, desc.length - 1);
        setDesc(str);
      }
    }
  }

  const handleEditDesc = (e) => {
    if(desc.length < props.max)
      setDesc(e.target.value);
  }
  if(props.isEditable)
    return (
      <div className="content-stat">
        <div className="center-stat">
          <p className="title-stat">{props.title}</p>
          {!edit ? (
            <p className="stat">
              {desc}
              <span>
                <img
                  src={pencil}
                  alt="editar"
                  onClick={() => {
                    setEdit(true);
                  }}
                  className="edit-stat"
                />
              </span>
            </p>
          ) : (
            <div className="content-input-stat">
              <textarea type="text" value={desc} 
              onKeyDown={keyDown}
              onChange={handleEditDesc} className="stat-input" />
              <span className="max-length">{props.max - desc.length}</span>
              <img
                src={confirm}
                alt="confirm"
                onClick={handleEditUser}
                className="edit-stat edit-input"
              />
            </div>
          )}
        </div>
      </div>
    );
  return(
      <div className="content-stat">
        <div className="center-stat">
          <p className="title-stat">{props.title}</p>
              {props.content}
        </div>
      </div>
    );
}
