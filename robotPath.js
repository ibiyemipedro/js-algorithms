// Algorithm to determin the path a robot will take from a start point to a destination. The question will be presented in a grid
// RECURSSION.

// Go through the grid one box at a time, ask questions, Am I at the destination?, Am I still in the grid, Have I been here before?, then decide to continue or stop.

let makeGrid = (n) => {
    let grid = [];
    for (let i = 0; i < n; i++) {
        grid.push([]);
        for (let j = 0; j < n; j++) {
            grid[i].push(false);   
        }   
    }

    grid.toggle = (i, j) => {
        grid[i][j] = !grid[i][j];
    }

    grid.visited = (i, j) => {
        return grid[i][j];
    }
    return grid;

}

let pathCounter = (n)=> {
    let paths = 0;
    let grid = makeGrid(n);

    let findPaths = (i, j) =>{
        if (i === n - 1 && j === n - 1){
            paths++;
        }
        if (i < 0 || i >= n || j < 0 || j >= n) {
            return;
        }
        if (grid.visited(i,j)) {
            return
        } else {
            grid.toggle(i, j);
            findPaths(i, j + 1);
            findPaths(i + 1 , j);
            findPaths(i, j - 1);
            findPaths(i - 1, j);
            grid.toggle(i,j);
        }
    }

    findPaths(0, 0);
    return paths; 
}