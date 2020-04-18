import React, { createContext } from "react";
import gameMapCreator from "../game-logic/gameMap";

export const GameContext = createContext();

const state = {
  cells: gameMapCreator(3),
  interations: 0,
  speed: 0,
  zoom: 0,
};

export default function GameProvider(props) {
  const value = { state };

  return <GameContext.Provider value={value} {...props} />;
}
