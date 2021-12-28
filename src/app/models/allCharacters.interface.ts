import { Character } from "./character.interface"

export interface getAllCharacters {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string,
    },
    results: Character[]

}