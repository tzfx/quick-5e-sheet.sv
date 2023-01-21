/**
 * Provides a format for
 *  serializing/deserializing character data.
 */

import { classes } from "../srd/classes";
import { Ability, AbilityScores, Skill, Skills } from "../types";
import type { Character } from "../types";

export const version = 0x1;
export const length = 28;

const sentinel = ",";

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
    if (split[0] !== version.toString() || split.length !== length) {
        throw Error(
            `Version mismatch: decoded: ${split[0]}, L${split.length}, expected: ${version}, L${length}`
        );
    } else {
        const name = split[1];
        const clazz = Object.values(classes).find(
            (c) => (c.name as string).toLowerCase().slice(0, 3) === split[2]
        );
        const level = parseInt(split[3]);
        // ability extraction.
        const abilities = new AbilityScores(clazz);
        abilities.str.score = parseInt(split[4]);
        abilities.dex.score = parseInt(split[5]);
        abilities.con.score = parseInt(split[6]);
        abilities.int.score = parseInt(split[7]);
        abilities.wis.score = parseInt(split[8]);
        abilities.cha.score = parseInt(split[9]);
        // skills extraction.
        const sparseSkills = {
            ath: { proficiency: { bonus: parseInt(split[10]) } },
            acr: { proficiency: { bonus: parseInt(split[11]) } },
            sle: { proficiency: { bonus: parseInt(split[12]) } },
            ste: { proficiency: { bonus: parseInt(split[13]) } },
            arc: { proficiency: { bonus: parseInt(split[14]) } },
            his: { proficiency: { bonus: parseInt(split[15]) } },
            inv: { proficiency: { bonus: parseInt(split[16]) } },
            nat: { proficiency: { bonus: parseInt(split[17]) } },
            rel: { proficiency: { bonus: parseInt(split[18]) } },
            ani: { proficiency: { bonus: parseInt(split[19]) } },
            ins: { proficiency: { bonus: parseInt(split[20]) } },
            med: { proficiency: { bonus: parseInt(split[21]) } },
            per: { proficiency: { bonus: parseInt(split[22]) } },
            sur: { proficiency: { bonus: parseInt(split[23]) } },
            dec: { proficiency: { bonus: parseInt(split[24]) } },
            int: { proficiency: { bonus: parseInt(split[25]) } },
            perf: { proficiency: { bonus: parseInt(split[26]) } },
            pers: { proficiency: { bonus: parseInt(split[27]) } },
        };
        const skills = new Skills(sparseSkills as any);
        return {
            name,
            clazz,
            level,
            abilities,
            skills,
        } as Character;
    }
};
