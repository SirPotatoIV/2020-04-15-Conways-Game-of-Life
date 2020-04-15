export default function gameMapCreator() {
  const gameMap = {};
  const mapSize = 5;
  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < mapSize; j++) {
      const tileName = `x${i}y${j}`;
      gameMap[tileName] = {
        x: i,
        y: j,
        isAlive: false,
      };
    }
  }
  console.log(gameMap);
}
gameMapCreator();
