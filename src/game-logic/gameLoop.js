import gameMapCreator from "./gameMap";

const gameMap = gameMapCreator(3);

function updateCells() {
  const aliveCells = ["x1y0", "x1y1", "x1y2"];
  aliveCells.forEach(function (currentCell) {
    gameMap[currentCell].isAlive = true;
  });
}

export default function lifeRules() {
  updateCells();
  // console.log(gameMap);
  // to optimize later maybe only worry about alive cells?
  // Any alive cell that is touching less than two alive neighbours dies.
  // this will be grabbed in a loop, but for now it will just be set as one cell

  Object.keys(gameMap).forEach(function (currentCell) {
    console.log(currentCell);
    const x = currentCell.x;
    const y = currentCell.y;
    const cellMath = [-1, 0, 1];
    for (let i = 0; i < cellMath.length; i++) {
      const currentX = x + cellMath[i];
      const xString = currentX.toString();
      for (let j = 0; j < cellMath.length; j++) {
        const currentY = y + cellMath[i];
        const yString = currentY.toString();
        const cellName = "x" + xString + "y" + yString;
      }
    }
    const noCell = {
      isAlive: false,
    };
    // all the cells the current cell can touch
    const neighborCells = [];
    // code currently not working correctly. Thought template literals would work this way, but they don't
    neighborCells[0] = gameMap[`x${x - 1}y${y - 1}`] || noCell;
    neighborCells[1] = gameMap[`x${x}y${y - 1}`] || noCell;
    neighborCells[2] = gameMap[`x${x + 1}y${y - 1}`] || noCell;
    // side neighbors
    neighborCells[3] = gameMap[`x${x - 1}y${y}`] || noCell;
    neighborCells[4] = gameMap[`x${x + 1}y${y}`] || noCell;
    // bottom neighbors
    neighborCells[5] = gameMap[`x${x - 1}y${y + 1}`] || noCell;
    neighborCells[6] = gameMap[`x${x}y${y + 1}`] || noCell;
    neighborCells[7] = gameMap[`x${x + 1}y${y + 1}`] || noCell;

    let aliveNeighborCount = 0;
    // Alive count
    // neighborCells.forEach(function (currentCell) {
    //   // console.log(currentCell, neighborCells);
    //   if (currentCell.isAlive) {
    //     aliveNeighborCount++;
    //   }
    // });

    // // find neighbor alive count
    // if (northCell.isAlive) {
    //   aliveNeighborCount++;
    // }
    // if (southCell.isAlive) {
    //   aliveNeighborCount++;
    // }
    // if (eastCell.isAlive) {
    //   aliveNeighborCount++;
    // }
    // if (westCell.isAlive) {
    //   aliveNeighborCount++;
    // }
    // console.log(aliveNeighborCount);
    // Any alive cell that is touching less than two alive neighbours dies.
    if (currentCell.isAlive && aliveNeighborCount < 2) {
      currentCell.isAlive = false;
    }

    // Any alive cell touching four or more alive neighbours dies.
    if (currentCell.isAlive && aliveNeighborCount <= 4) {
      currentCell.isAlive = false;
    }

    // Any alive cell touching two or three alive neighbours does nothing.
    // if(currentCell.)
  });

  //
  // -- cells to check
}
