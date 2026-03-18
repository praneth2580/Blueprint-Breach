import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Grid from './components/Grid';
import { createGrid, type Tile } from './ts/engine/grid';

const App: React.FC = () => {
    const GRID_WIDTH = 100;
    const GRID_HEIGHT = 100;
    const [gridData, setGridData] = useState<Tile[]>([]);

    useEffect(() => {
        // Initialize grid on mount
        const initialGrid = createGrid(GRID_WIDTH, GRID_HEIGHT);
        setGridData(initialGrid);
        console.log("Game structural modules loaded via App component.");
    }, []);

    return (
        <div id="game-container">
            <Header />
            <Grid gridData={gridData} width={GRID_WIDTH} height={GRID_HEIGHT} />
            <Sidebar />
        </div>
    );
};

export default App;
