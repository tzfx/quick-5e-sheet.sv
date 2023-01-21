export const bard = {
    name: "Bard",
    source: "PHB",
    page: 51,
    srd: true,
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["dex", "cha"],
    spellcastingAbility: "cha",
    casterProgression: "full",
    cantripProgression: [
        2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    ],
    spellsKnownProgression: [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22,
        22,
    ],
    additionalSpells: [
        {
            name: "Magical Secrets",
            known: {
                10: [
                    {
                        choose: "level=0;1;2;3;4;5",
                    },
                    {
                        choose: "level=0;1;2;3;4;5",
                    },
                ],
                14: [
                    {
                        choose: "level=0;1;2;3;4;5;6;7",
                    },
                    {
                        choose: "level=0;1;2;3;4;5;6;7",
                    },
                ],
                18: [
                    {
                        choose: "",
                    },
                    {
                        choose: "",
                    },
                ],
            },
        },
    ],
    startingProficiencies: {
        armor: ["light"],
        weapons: [
            "simple",
            "{@item hand crossbow|phb|hand crossbows}",
            "{@item longsword|phb|longswords}",
            "{@item rapier|phb|rapiers}",
            "{@item shortsword|phb|shortswords}",
        ],
        tools: [
            "three {@item musical instrument|PHB|musical instruments} of your choice",
        ],
        skills: [
            {
                any: 3,
            },
        ],
    },
};
