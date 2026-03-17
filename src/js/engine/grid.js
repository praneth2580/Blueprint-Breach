// grid.js - Grid Engine
// Manages the tile grid system, storing metadata about each tile

export function initGrid() {
    console.log("Grid Engine initialized.");
}

export function createGrid(width, height) {
    const grid = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            grid.push({
                x,
                y,
                type: "floor",
                roomId: null,
                visible: false,
                entity: null,
                lightLevel: 2 // 0: dark, 1: dim, 2: normal, 3: bright
            });
        }
    }
    return grid;
}
