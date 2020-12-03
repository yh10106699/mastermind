import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Rule from "./Components/Rule";
import MasterMind from "./Components/MasterMind";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {MasterMind}/>
          <Route path = "/rule" component = {Rule}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
