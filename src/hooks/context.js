import React, { createContext } from "react";

export const GameContext = createContext();

const state = "test";

export default function GameProvider(props) {
  const value = { state };

  return <GameContext.Provider value={value} {...props} />;
}
