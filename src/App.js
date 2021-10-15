import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Oldheader from "./component/Oldheader/Oldheader.js";
import JumboImage from "./component/jumboImage/jumboImage.js";
import Holdercard from "./component/Holdercard/Holdercard.js";


import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Oldheader />
        <div style={{ height: "60px" }}></div>


        <Route path="/">
          <JumboImage />
          <div style={{ height: "60px" }}></div>
          <Holdercard />
        </Route>


      </div>
    </BrowserRouter>
  );
}

export default App;
