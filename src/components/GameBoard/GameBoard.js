import React, { useContext } from "react";
import Cell from "../Cell";
import { GameContext } from "../../hooks/context";

export default function GameBoard() {
  const { state } = useContext(GameContext);
  console.log(state);
  return (
    <div>
      <h1>This is a test</h1>
      {Object.entries(state.cells).map(function ([cellName, cell]) {
        console.log(cell);
        return (
          <div key={cellName} cell={cell}>
            {cellName}
          </div>
        );
      })}
    </div>
  );
}
