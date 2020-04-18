import React, { useContext, useCallback } from "react";
import Cell from "../Cell";
import { GameContext } from "../../hooks/context";

export default function GameBoard() {
  const { state, setState } = useContext(GameContext);
  const styleSelector = useCallback((isAlive) => {
    if (isAlive) {
      return "black";
    } else {
      return "white";
    }
  }, []);
  console.log(state);
  return (
    <div>
      <h1>This is a test</h1>
      {Object.entries(state.cells).map(function ([cellName, cell]) {
        console.log(cell);
        const backgroundColor = styleSelector(cell.isAlive);
        return (
          <div
            style={{
              backgroundColor: { backgroundColor },
              border: "solid black 2px",
            }}
            key={cellName}
            onClick={() => {
              console.log(cell.isAlive);
            }}
          >
            {cellName}
          </div>
        );
      })}
    </div>
  );
}
