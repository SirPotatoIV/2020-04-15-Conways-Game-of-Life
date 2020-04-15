import gameMapCreator from "./gameMap";

const gameMap = gameMapCreator();

function updateCells() {
  const aliveCells = ["x1y1", "x1y2", "x1y3"];
  aliveCells.forEach(function (currentCell) {
    gameMap[currentCell].isAlive = true;
  });
}

export default function lifeRules() {
  updateCells();
  // to optimize later maybe only worry about alive cells?
  // Any alive cell that is touching less than two alive neighbours dies.
  // this will be grabbed in a loop, but for now it will just be set as one cell
  Object.keys(gameMap).forEach(function (currentCell) {
    console.log(gameMap[currentCell].isAlive);
  });

  //
  // const currentCellValues = currentCell.split("");
  // -- cells to check
}
