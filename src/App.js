import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
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
      <JumboImage />
      <Holdercard />
      <Route path="/data">
        <h1>data =asdfgyhu</h1>
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
