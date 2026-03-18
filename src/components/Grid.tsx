import React from 'react';
import { type Tile } from '../ts/engine/grid';

interface GridProps {
    gridData: Tile[];
    width: number;
    height: number;
}

const Grid: React.FC<GridProps> = ({ gridData, width, height }) => {
    return (
        <main 
            id="grid-container"
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                gridTemplateRows: `repeat(${height}, 1fr)`
            }}
        >
            {gridData.map((tile) => (
                <div 
                    key={tile.id} 
                    className="tile"
                    style={{
                        backgroundColor: tile.fog === 'hidden' ? '#000' : undefined
                    }}
                />
            ))}
        </main>
    );
};

export default Grid;
