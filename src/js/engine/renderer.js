// renderer.js - UI and Grid Renderer
// Uses CSS Grid to render the generated tiles as described in the README

export function initRenderer() {
    console.log("Renderer initialized. Waiting for grid data...");
}

export function renderGrid(gridData, width, height) {
    const container = document.getElementById('grid-container');
    if (!container) return;
    
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    container.innerHTML = '';
    
    gridData.forEach(tile => {
        const div = document.createElement('div');
        div.className = 'tile';
        // Initial fog of war hidden state
        if (!tile.visible) {
            div.style.backgroundColor = '#000';
        }
        container.appendChild(div);
    });
}
