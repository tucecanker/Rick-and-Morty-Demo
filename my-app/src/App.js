import './App.css';
import React from "react";
import CardList from './CardList'

function App() {
  return (
    <div className="App">
          <img
              src={"https://images5.alphacoders.com/876/876590.png"}
              className="App-logo"
              alt="logo"
          />
          <div className={"App-fluid"}>
              <h1>The Rick and Morty API</h1>
          </div>
        <CardList/>
    </div>
  );
}

export default App;
