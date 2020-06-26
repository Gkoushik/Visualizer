export function DFS(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  DFSUtil(grid, startNode, finishNode, visitedNodesInOrder);
  return visitedNodesInOrder;
}

function DFSUtil(grid, node, finishNode, visitedNodesInOrder) {
  var p = node;
  node.isVisited = true;
  visitedNodesInOrder.push(p);

  if (finishNode === node) return 1;

  // moving right
  if (
    p.col + 1 < 50 &&
    !grid[p.row][p.col + 1].isVisited &&
    !grid[p.row][p.col + 1].isWall
  ) {
    if (DFSUtil(grid, grid[p.row][p.col + 1], finishNode, visitedNodesInOrder))
      return 1;
  }

  // moving up
  if (
    p.row - 1 >= 0 &&
    !grid[p.row - 1][p.col].isVisited &&
    !grid[p.row - 1][p.col].isWall
  ) {
    if (DFSUtil(grid, grid[p.row - 1][p.col], finishNode, visitedNodesInOrder))
      return 1;
  }

  // moving down
  if (
    p.row + 1 < 20 &&
    !grid[p.row + 1][p.col].isVisited &&
    !grid[p.row + 1][p.col].isWall
  ) {
    if (DFSUtil(grid, grid[p.row + 1][p.col], finishNode, visitedNodesInOrder))
      return 1;
  }

  // moving left
  if (
    p.col - 1 >= 0 &&
    !grid[p.row][p.col - 1].isVisited &&
    !grid[p.row][p.col - 1].isWall
  ) {
    if (DFSUtil(grid, grid[p.row][p.col - 1], finishNode, visitedNodesInOrder))
      return 1;
  }
}
