export default function gameMapCreator(mapSize) {
  // object to store all the map tiles
  // -- each tile will represent a cell. Each cell will have an x coord, y coord, and a status of whether or not it is alive
  const gameMap = {};
  // loop twice to create an x by y grid that is mapSize big
  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      // creates a property for each map tile in the object gameMap
      const tileName = `x${i}y${j}`;
      // creates an object to be stored in the associated property in gameMap
      gameMap[tileName] = {
        // x location
        x: i,
        // y location
        y: j,
        // status of tile/cell
        isAlive: false,
      };
    }
  }
  return gameMap;
}
