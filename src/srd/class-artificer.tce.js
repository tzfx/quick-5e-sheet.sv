export const artificer = {
    name: "Artificer",
    source: "TCE",
    page: 9,
    otherSources: [
        {
            source: "ERLW",
            page: 54,
        },
    ],
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["con", "int"],
    spellcastingAbility: "int",
    casterProgression: "1/2",
    preparedSpells: "<$level$> / 2 + <$int_mod$>",
    cantripProgression: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
    ],
    optionalfeatureProgression: [
        {
            name: "Infusions",
            featureType: ["AI"],
            progression: [
                0, 4, 4, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12,
                12,
            ],
        },
    ],
    startingProficiencies: {
        armor: ["light", "medium", "{@item shield|phb|shields}"],
        weapons: [
            "simple",
            {
                proficiency: "firearms",
                optional: true,
            },
        ],
        tools: [
            "{@item thieves' tools|PHB}",
            "{@item tinker's tools|PHB}",
            "one type of {@item artisan's tools|PHB} of your choice",
        ],
        skills: [
            {
                choose: {
                    from: [
                        "arcana",
                        "history",
                        "investigation",
                        "medicine",
                        "nature",
                        "perception",
                        "sleight of hand",
                    ],
                    count: 2,
                },
            },
        ],
    },
};
