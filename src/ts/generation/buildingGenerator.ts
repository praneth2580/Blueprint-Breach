import { floor } from "../data/floor";
import { weightedRandom } from "../utils/random";

export function generateAlley(floor: floor): floor | null {
    try {

        const hallwayTypes = [
            {
                value: "horizontal",
                probability: 0.5,
            },
            {
                value: "vertical",
                probability: 0.5,
            },
        ]

        const hallwayType = weightedRandom(hallwayTypes);

        console.log(hallwayType)

        return floor;
    } catch (error) {
        return null;
    }
}