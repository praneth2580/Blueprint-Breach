// grid.ts - Grid Engine
// Manages the tile grid system, storing metadata about each tile
import { type Tile, tileType, fogState } from "../data/rooms";
export { type Tile, tileType, fogState } from "../data/rooms";

export function initGrid(): void {
    console.log("Grid Engine initialized.");
}

export function createGrid(width: number, height: number): Tile[] {
    const grid: Tile[] = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            grid.push({
                id: `tile_${x}_${y}`,
                x,
                y,
                floor: 0,
                type: tileType.Floor,
                roomId: null,
                fog: fogState.Hidden,
                entity: null,
                lightLevel: 2, // 0: dark, 1: dim, 2: normal, 3: bright
                soundLevel: 0  // 0 = silent
            });
        }
    }
    return grid;
}
