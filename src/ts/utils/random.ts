// utils/random.ts - Weighted random selection utilities

/**
 * Picks a string from the `options` array based on corresponding
 * probability weights in the `weights` array.
 *
 * @param options - Array of strings to choose from
 * @param weights - Array of decimals (0–1) representing probability of each option.
 *                  Must sum to 1.0 (allows small floating-point tolerance).
 * @returns The chosen string
 *
 * @example
 * weightedRandom(["common", "rare", "legendary"], [0.7, 0.25, 0.05]);
 * // Returns "common" 70% of the time, "rare" 25%, "legendary" 5%
 */
export function weightedRandom(data: { value: string, probability: number }[]): string {

    const options = data.map(item => item.value);
    const weights = data.map(item => item.probability);

    if (options.length !== weights.length) {
        throw new Error("Options and weights arrays must be the same length.");
    }

    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    if (Math.abs(totalWeight - 1.0) > 0.01) {
        throw new Error(`Weights must sum to 1.0 (got ${totalWeight}).`);
    }

    const roll = Math.random();
    let cumulative = 0;

    for (let i = 0; i < options.length; i++) {
        cumulative += weights[i];
        if (roll < cumulative) {
            return options[i];
        }
    }

    // Fallback for floating-point edge case
    return options[options.length - 1];
}
