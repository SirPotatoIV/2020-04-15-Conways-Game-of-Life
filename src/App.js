import React from "react";
import "./App.css";
import GameProvider from "./hooks/context.js";
import lifeRules from "./game-logic/gameLoop";
import GameBoard from "./components/GameBoard";

function App() {
  lifeRules();
  return (
    <div className="App">
      <GameProvider>
        <div>Test</div>
        <GameBoard />
      </GameProvider>
    </div>
  );
}

export default App;
