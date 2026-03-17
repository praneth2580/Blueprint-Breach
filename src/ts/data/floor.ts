export enum floorType {
    Basement = 'basement',
    Ground = 'ground',
    Upper = 'upper',
    Rooftop = 'rooftop',
    Parking = 'parking',
}

export interface floor {
    id: string;
    level: number;
    type: floorType;
    width: number;
    height: number;
    roomIds: string[];
    tileIds: string[];
    stairsUp: string[];     // tile IDs leading up
    stairsDown: string[];   // tile IDs leading down
    liftIds: string[]; // room IDs
    entryPoints: string[];  // tile IDs for squad insertion (windows, doors, roof access)
    hasPower: boolean;
    discovered: boolean;
    estimatedEnemies: number;   // from pre-mission intel (may be inaccurate)
    estimatedHostages: number;
}