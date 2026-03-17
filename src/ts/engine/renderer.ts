// renderer.ts - UI and Grid Renderer
// Uses CSS Grid to render the generated tiles as described in the README
import type { Tile } from './grid';

export function initRenderer(): void {
    console.log("Renderer initialized. Waiting for grid data...");
}

export function renderGrid(gridData: Tile[], width: number, height: number): void {
    const container = document.getElementById('grid-container');
    if (!container) return;
    
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    container.innerHTML = '';
    
    gridData.forEach((tile: Tile) => {
        const div = document.createElement('div');
        div.className = 'tile';
        // Initial fog of war hidden state
        if (!tile.visible) {
            div.style.backgroundColor = '#000';
        }
        container.appendChild(div);
    });
}
