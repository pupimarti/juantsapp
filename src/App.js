import React from 'react';
import Directs from './components/Directs'
import { AppContextProvider } from "components/Context/AppContext";
import JavascriptTimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";

import './App.css';


JavascriptTimeAgo.locale(es);

function App() {
  return (
    <div className="content-app">
      <div className="header-app"></div>
      <div className="app">
        <AppContextProvider>
            <Directs />
          </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
