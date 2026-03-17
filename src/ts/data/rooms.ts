import type { entity } from "./entity";

export enum roomType {
    // General
    Generic = 'generic',
    Hallway = 'hallway',
    Stairwell = 'stairwell',
    Elevator = 'elevator',
    Bathroom = 'bathroom',
    Storage = 'storage',
    Utility = 'utility',

    // Residential (Villa)
    LivingRoom = 'living_room',
    Bedroom = 'bedroom',
    Kitchen = 'kitchen',
    DiningRoom = 'dining_room',
    Garage = 'garage',
    Basement = 'basement',
    Attic = 'attic',
    Laundry = 'laundry',

    // Residential (Building / Apartment)
    Apartment = 'apartment',
    CommonHall = 'common_hall',
    ManagerOffice = 'manager_office',
    ParkingLot = 'parking_lot',
    Terrace = 'terrace',
    MaintenanceRoom = 'maintenance_room',
    SecurityRoom = 'security_room',

    // Commercial / Office
    Office = 'office',
    ServerRoom = 'server_room',
    ConferenceRoom = 'conference_room',
    Reception = 'reception',
    Surveillance = 'surveillance',
    Breakroom = 'breakroom',
    Lobby = 'lobby',
    Vault = 'vault',
    MailRoom = 'mail_room',

    // Abandoned / Industrial
    Workshop = 'workshop',
    Generator = 'generator',
    Warehouse = 'warehouse',
    Lab = 'lab',
    Cell = 'cell',
    Armory = 'armory',
}

export enum tileType {
    Floor = 'floor',
    Wall = 'wall',
    Door = 'door',
    Window = 'window',
    Stairs = 'stairs',
}

export interface window {
    id: string;
    x: number;
    y: number;
    width: number;
    open: boolean;
    broken: boolean;
    health: number;
    maxHealth: number;
}

export enum doorType {
    Wooden = 'wooden',
    Metal = 'metal',
    Glass = 'glass',
    Reinforced = 'reinforced',
    Vault = 'vault',
    Security = 'security',
    Emergency = 'emergency',
    Sliding = 'sliding',
    Revolving = 'revolving',
    Garage = 'garage',
}

export enum doorState {
    Closed = 'closed',
    Open = 'open',
    Locked = 'locked',
    Barricaded = 'barricaded'
}

export enum fogState {
    Hidden = 'hidden',
    Discovered = 'discovered',
    Visible = 'visible'
}

export enum evidenceType {
    Digital = 'digital',
    Documents = 'documents',
    Weapons = 'weapons',
    Contraband = 'contraband',
    Financial = 'financial',
    Forensic = 'forensic'
}

export interface evidence {
    id: string;
    type: evidenceType;
    description: string;
    collected: boolean;
}

export interface searchable {
    id: string;
    name: string;       // e.g. "Desk", "Cabinet", "Server Rack"
    searched: boolean;
    evidence: evidence | null;
}

export enum trapType {
    Tripwire = 'tripwire',
    Explosive = 'explosive',
    Gas = 'gas',
    Alarm = 'alarm'
}

export interface trap {
    id: string;
    x: number;
    y: number;
    type: trapType;
    armed: boolean;
    detected: boolean; // revealed by scanning tools
}

export interface door {
    id: string;
    x: number;
    y: number;
    type: doorType;
    state: doorState;
    connectsRooms: [string, string]; // [roomId1, roomId2]
    key: string | null;
    health: number;
    maxHealth: number;
}

export interface brokenWall {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface room {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    floor: number;
    type: roomType;
    doors: door[];
    entities: entity[];
    baseLightLevel: number;  // default light for tiles in this room (0: dark, 1: dim, 2: normal, 3: bright)
    fog: fogState;
    windows: window[];
    brokenWalls: brokenWall[];
    evidence: evidence[];
    searchables: searchable[];
    traps: trap[];
    searched: boolean;
    hasPower: boolean;
    hidden: boolean;         // only revealed by special tools or investigation
    tileIds: string[];
    adjacentRoomIds: string[];
}

export interface Tile {
    id: string;
    x: number;
    y: number;
    floor: number;
    type: tileType;
    roomId: string | null;
    fog: fogState;
    entity: entity | null;
    lightLevel: number;
    soundLevel: number; // 0 = silent, higher = louder
}
