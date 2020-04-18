import React from "react";
import "./App.css";
import lifeRules from "./game-logic/gameLoop";
import cell from "./components/cell";

function App() {
  lifeRules();
  return (
    <div className="App">
      <div>Test</div>
    </div>
  );
}

export default App;
