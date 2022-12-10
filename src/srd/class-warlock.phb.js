export const warlock = {
    name: "Warlock",
    source: "PHB",
    page: 105,
    srd: true,
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["wis", "cha"],
    spellcastingAbility: "cha",
    casterProgression: "pact",
    cantripProgression: [
        2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    ],
    spellsKnownProgression: [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15,
    ],
    spellsKnownProgressionFixedByLevel: {
        11: {
            6: 1,
        },
        13: {
            7: 1,
        },
        15: {
            8: 1,
        },
        17: {
            9: 1,
        },
    },
    optionalfeatureProgression: [
        {
            name: "Eldritch Invocations",
            featureType: ["EI"],
            progression: [
                0, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8,
            ],
        },
        {
            name: "Pact Boon",
            featureType: ["PB"],
            progression: {
                3: 1,
            },
        },
    ],
    startingProficiencies: {
        armor: ["light"],
        weapons: ["simple"],
        skills: [
            {
                choose: {
                    from: [
                        "arcana",
                        "deception",
                        "history",
                        "intimidation",
                        "investigation",
                        "nature",
                        "religion",
                    ],
                    count: 2,
                },
            },
        ],
    },
};
