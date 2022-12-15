/**
 * Provides a format for
 *  serializing/deserializing character data.
 */

import { classes } from "../srd/classes";
import { Ability, AbilityScores, Skill, Skills } from "../types";
import type { Character } from "../types";

export const version = 0x1;

const sentinel = "•";

/**
 * Encodes character data into a string.
 * @param character Character data.
 * @returns an encoded string.
 */
export const encode = (character: Character) =>
    [
        version,
        character.name,
        (character.clazz.name as string).slice(0, 3).toLowerCase(),
        character.level,
        ...Object.values(character.abilities).map((a: Ability) => a.score),
        ...Object.values(character.skills).map(
            (s: Skill) => s.proficiency.bonus
        ),
    ].join(sentinel);

/**
 * Decodes string data to a character.
 * @param encoded Encoded string data.
 * @returns a character
 */
export const decode = (encoded: string) => {
    const split = encoded.split(sentinel);
    if (split[0] !== version.toString()) {
        throw Error(
            `Version mismatch: decoded: ${split[0]}, expected: ${version}`
        );
    } else {
        const name = split[1];
        const clazz = Object.values(classes).find((c) => (c.name as string).slice(0,3) === split[2] );
        const level = parseInt(split[3]);
        // @todo abilities extraction.
        const abilities = new AbilityScores(clazz);
        abilities.str.score = parseInt(split[4]);
        // @todo skills extraction.
        const skills = new Skills();
        return {
            name,
            clazz,
            level,
            abilities,
            skills,
        } as Character;
    }
};
