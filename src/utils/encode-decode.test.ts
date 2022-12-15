import { AbilityScores, Skills } from "../types";
import type { Character } from "../types";
import { classes } from "../srd/classes";

import { encode, version } from "./encode-decode";

describe("encoder/decode", () => {
    test(`encode a ${version} character with `, () => {

        const character: Character = {
            name: "Frank",
            clazz: classes.cleric,
            level: 5,
            abilities: new AbilityScores(classes.cleric),
            skills: new Skills()
        };
        // Standard array.
        character.abilities.str.score = 12;
        character.abilities.dex.score = 13;
        character.abilities.con.score = 14;
        character.abilities.int.score = 8;
        character.abilities.wis.score = 15;
        character.abilities.cha.score = 10;

        character.skills.acr.proficiency.next();
        character.skills.ani.proficiency.next();
        character.skills.arc.proficiency.next();

        const encoded = encode(character);
        // expect(encoded).toMatchSnapshot();

    });
});
