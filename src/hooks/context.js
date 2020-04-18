import React, { createContext, useState } from "react";
import gameMapCreator from "../game-logic/gameMap";

export const GameContext = createContext();

const initialState = {
  cells: gameMapCreator(3),
  interations: 0,
  speed: 0,
  zoom: 0,
};

export default function GameProvider(props) {
  const [state, setState] = useState(initialState);
  const value = { state, setState };

  return <GameContext.Provider value={value} {...props} />;
}
