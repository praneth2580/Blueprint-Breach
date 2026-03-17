import { initGrid } from './ts/engine/grid.ts';
import { initRenderer } from './ts/engine/renderer.ts';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Game structural modules loaded via main.ts.");
    initGrid();
    initRenderer();
});
