// utils/idGenerator.ts - Unique ID generation utilities

/** Internal counter to guarantee uniqueness even if timestamps collide */
let counter = 0;

/**
 * Generates a unique hash ID with a given prefix.
 * Combines a prefix, timestamp, counter, and random hex to ensure
 * no two IDs ever match.
 *
 * @param prefix - Category label (e.g. "room", "door", "tile", "trap")
 * @returns A unique string ID like "room_1a3f_0001_c7b2"
 *
 * @example
 * generateId("room");  // "room_6f1a_0001_e4d9"
 * generateId("door");  // "door_6f1a_0002_3b7c"
 * generateId("tile");  // "tile_6f1a_0003_a012"
 */
export function generateId(prefix: string): string {
    counter++;
    const timestamp = Date.now().toString(16).slice(-4);
    const count = counter.toString(16).padStart(4, '0');
    const random = Math.random().toString(16).slice(2, 6);
    return `${prefix}_${timestamp}_${count}_${random}`;
}

/**
 * Resets the internal counter.
 * Call this at the start of a new mission/level generation.
 */
export function resetIdCounter(): void {
    counter = 0;
}
