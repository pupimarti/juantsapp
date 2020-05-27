import React, { useState } from "react";
import Directs from "./components/Directs";
import { AppContextProvider } from "components/Context/AppContext";

import "./App.css";

function App() {
  const [dark, setDark] = useState(
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      false
  );

  const handleSetDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "content-app dark" : "content-app"}>
      <div className="header-app"></div>
      <div className="app">
        <AppContextProvider>
          <Directs setMode={handleSetDark} />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
