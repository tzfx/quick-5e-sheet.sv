export const rogue = {
    name: "Rogue",
    source: "PHB",
    page: 94,
    srd: true,
    basicRules: true,
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["dex", "int"],
    startingProficiencies: {
        armor: ["light"],
        weapons: [
            "simple",
            "{@item hand crossbow|phb|hand crossbows}",
            "{@item longsword|phb|longswords}",
            "{@item rapier|phb|rapiers}",
            "{@item shortsword|phb|shortswords}",
        ],
        tools: ["{@item thieves' tools|PHB}"],
        skills: [
            {
                choose: {
                    from: [
                        "acrobatics",
                        "athletics",
                        "deception",
                        "insight",
                        "intimidation",
                        "investigation",
                        "perception",
                        "performance",
                        "persuasion",
                        "sleight of hand",
                        "stealth",
                    ],
                    count: 4,
                },
            },
        ],
    },
};
