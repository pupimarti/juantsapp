import React, { useState } from "react";
import pencil from "img/edit.svg";
import confirm from "img/confirm.svg";
import "./css.css";

export default function Stat(props) {
  const [edit, setEdit] = useState(false);

  const [desc, setDesc] = useState(props.desc);

  return (
    <div className="content-stat">
      <div className="center-stat">
        <p className="title-stat">{props.title}</p>
        {!edit ? (
          <p className="stat">
            {props.desc}
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
            <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="stat-input" />
            <img
              src={confirm}
              alt="confirm"
              onClick={() => {
                setEdit(false);
              }}
              className="edit-stat edit-input"
            />
          </div>
        )}
      </div>
    </div>
  );
}
