import React, { useState } from "react";
import searchIcon from "img/search.svg";
import "./css.css";
export default function Search(props) {
  const [search, setSearch] = useState("");

  return (
    <div className="content-search">
      <div className="center-width search">
        <img src={searchIcon} alt="search" className="icon-search" />
        <input
          type="text"
          className="input-search"
          placeholder={props.contacts ? "Buscar contactos" : "Buscar o empezar un chat nuevo"}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  );
}
