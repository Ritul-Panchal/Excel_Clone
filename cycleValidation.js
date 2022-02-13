// Storage -> 2D array (basic needed)
let collectedGraphComponents = [];

let graphComponentMatrix = [];

// for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//         row.push([]);
//     }
//     graphComponentMatrix.push(row);
// }

// returns a boolean value
function isGraphCyclic(graphComponentMatrix) {
    // Dependencies -> visited and dfsVisited [2D array]
    let visited = [];
    let dfsVisited = [];

    for (let i = 0; i < rows; i++) {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for (let j = 0; j < cols; j++) {
            visitedRow.push(false);
            dfsVisitedRow.push(false);
        }
        visited.push(visitedRow);
        dfsVisited.push(dfsVisitedRow);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (visited[i][j] == false) {
                let responce = dfsCycleDetection(graphComponentMatrix, i, j, visited, dfsVisited);
                // Found cycle, so return immediately, no need to explore more paths
                if (responce == true) return [i, j];
            }
        }
    }

    return null;
}


// start(when visiting the node) -> vis[true], dfsVis[true]
// end(when leaving the node) -> dfsVis[false]
// If vis[i][j] -> already explored, then no need to explore it again.
// cycle detection condition -> if (vis[i][j] && dfsVis[i][j]) => cycle
function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsVisited) {
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    // A1 -> [[0, 1], [1, 3], [4, 5], .....]
    for (let children = 0; children < graphComponentMatrix[srcr][srcc].length; children++) {
        let [nbrr, nbrc] = graphComponentMatrix[srcr][srcc][children];
        if (visited[nbrr][nbrc] == false) {
            let responce = dfsCycleDetection(graphComponentMatrix, nbrr, nbrc, visited, dfsVisited);
            if (responce == true) return true; // Found cycle, so return immediately, no need to explore more paths
        } else if (visited[nbrr][nbrc] == true && dfsVisited[nbrr][nbrc] == true) {
            // Found cycle, so return immediately, no need to explore more paths
            return true;
        }
    }

    dfsVisited[srcr][srcc] = false;
    return false;
}