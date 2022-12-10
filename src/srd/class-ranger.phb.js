export const ranger = {
    name: "Ranger",
    source: "PHB",
    page: 89,
    srd: true,
    hd: {
        number: 1,
        faces: 10,
    },
    proficiency: ["str", "dex"],
    spellcastingAbility: "wis",
    casterProgression: "1/2",
    spellsKnownProgression: [
        0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
    ],
    optionalfeatureProgression: [
        {
            name: "Fighting Style",
            featureType: ["FS:R"],
            progression: {
                2: 1,
            },
        },
    ],
    startingProficiencies: {
        armor: ["light", "medium", "{@item shield|phb|shields}"],
        weapons: ["simple", "martial"],
        skills: [
            {
                choose: {
                    from: [
                        "animal handling",
                        "athletics",
                        "insight",
                        "investigation",
                        "nature",
                        "perception",
                        "stealth",
                        "survival",
                    ],
                    count: 3,
                },
            },
        ],
    },
    classTableGroups: [
        {
            colLabels: ["{@filter Spells Known|spells|class=ranger}"],
            rows: [
                [0],
                [2],
                [3],
                [3],
                [4],
                [4],
                [5],
                [5],
                [6],
                [6],
                [7],
                [7],
                [8],
                [8],
                [9],
                [9],
                [10],
                [10],
                [11],
                [11],
            ],
        },
        {
            title: "Spell Slots per Spell Level",
            colLabels: [
                "{@filter 1st|spells|level=1|class=Ranger}",
                "{@filter 2nd|spells|level=2|class=Ranger}",
                "{@filter 3rd|spells|level=3|class=Ranger}",
                "{@filter 4th|spells|level=4|class=Ranger}",
                "{@filter 5th|spells|level=5|class=Ranger}",
            ],
            rowsSpellProgression: [
                [0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0],
                [3, 0, 0, 0, 0],
                [3, 0, 0, 0, 0],
                [4, 2, 0, 0, 0],
                [4, 2, 0, 0, 0],
                [4, 3, 0, 0, 0],
                [4, 3, 0, 0, 0],
                [4, 3, 2, 0, 0],
                [4, 3, 2, 0, 0],
                [4, 3, 3, 0, 0],
                [4, 3, 3, 0, 0],
                [4, 3, 3, 1, 0],
                [4, 3, 3, 1, 0],
                [4, 3, 3, 2, 0],
                [4, 3, 3, 2, 0],
                [4, 3, 3, 3, 1],
                [4, 3, 3, 3, 1],
                [4, 3, 3, 3, 2],
                [4, 3, 3, 3, 2],
            ],
        },
    ],
};
