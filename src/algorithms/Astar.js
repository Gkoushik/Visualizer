export function Astar(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];

  const openSet = [];
  const closedSet = [];
  openSet.push(startNode);

  startNode.distance = 0;
  while (openSet.length) {
    sortNodesByDistance(openSet); //sort with distance
    const currentNode = openSet.shift();
    closedSet.push(currentNode);
    currentNode.isVisitedNode = true;

    visitedNodesInOrder.push(currentNode);

    // finally find the goal, trace path with parent
    if (currentNode === finishNode) {
      return visitedNodesInOrder;
    }

    const Neighbours = getNeighbors(currentNode, grid);

    for (var i = 0; i < Neighbours.length; i++) {
      let neighbour = Neighbours[i];

      if (neighbour.isWall || closedSet.includes(neighbour)) {
        continue;
      }

      let cost =
        currentNode.distance + heuristic_cost_estimate(currentNode, neighbour);
      console.log(cost);
      console.log(neighbour.distance);

      if (cost < neighbour.distance || !openSet.includes(neighbour)) {
        neighbour.distance = cost;
        neighbour.hdistance = heuristic_cost_estimate(neighbour, finishNode);
        neighbour.previousNode = currentNode;

        if (!openSet.includes(neighbour)) {
          openSet.push(neighbour);
          console.log(neighbour);
        }
      }
    }
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort(
    (nodeA, nodeB) =>
      nodeA.distance + nodeA.hdistance - (nodeB.distance + nodeB.hdistance)
  );
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}

function heuristic_cost_estimate(nodeA, nodeB) {
  const deltaX = Math.abs(nodeA.row - nodeB.row);
  const deltaY = Math.abs(nodeA.col - nodeB.col);

  return deltaX + deltaY;
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    console.log(currentNode);
    console.log(currentNode.isWall);
    console.log(currentNode.previousNode);

    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
    console.log(currentNode);
  }
  return nodesInShortestPathOrder;
}
