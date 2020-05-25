import React, {useState} from 'react';
import Directs from './components/Directs'
import { AppContextProvider } from "components/Context/AppContext";
import JavascriptTimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";

import './App.css';


JavascriptTimeAgo.locale(es);

function App() {

  const [dark, setDark] = useState(false);

  const handleSetDark = () => {
    setDark(!dark);
  }

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
