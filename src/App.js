import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Oldheader from "./component/Oldheader/Oldheader.js";
import JumboImage from "./component/jumboImage/jumboImage.js";
import Holdercard from "./component/Holdercard/Holdercard.js";
import Dibetes from "./predictionform/dibetes.js";


import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <div style={{ height: "60px" }}></div>
        


        <Route path="/home" >
          <JumboImage />
          <Holdercard />
        </Route>

        <Route path="/dibetes">
          <Dibetes />
         </Route>

        <Oldheader />
      </div>
    </BrowserRouter>
  );
}

export default App;
