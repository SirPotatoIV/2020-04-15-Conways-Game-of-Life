import React, { useContext, useCallback } from "react";
import Cell from "../Cell";
import { GameContext } from "../../hooks/context";

export default function GameBoard() {
  const { state, setState } = useContext(GameContext);
  const styleSelector = useCallback((isAlive) => {
    if (isAlive) {
      return "blue";
    } else {
      return "red";
    }
  }, []);
  const handleClick = useCallback((cell) => {
    if (cell.isAlive) {
      setState({
        ...state,
        cells: {
          ...state.cells,
          [cell.cellName]: { ...state.cells[cell.cellName], isAlive: false },
        },
      });
    } else {
      setState({
        ...state,
        cells: {
          ...state.cells,
          [cell.cellName]: { ...state.cells[cell.cellName], isAlive: true },
        },
      });
    }
  }, []);
  console.log(state);

  return (
    <div>
      <h1>This is a test</h1>
      {Object.entries(state.cells).map(function ([cellName, cell]) {
        const backgroundColor = styleSelector(cell.isAlive);
        console.log(typeof backgroundColor);
        return (
          <div
            style={{
              color: backgroundColor,
              border: "solid black 2px",
            }}
            key={cellName}
            onClick={() => {
              console.log(cell.isAlive);
              handleClick(cell);
            }}
          >
            {backgroundColor}
          </div>
        );
      })}
    </div>
  );
}
