export const fighter = {
    name: "Fighter",
    source: "PHB",
    page: 70,
    srd: true,
    basicRules: true,
    hd: {
        number: 1,
        faces: 10,
    },
    proficiency: ["str", "con"],
    optionalfeatureProgression: [
        {
            name: "Fighting Style",
            featureType: ["FS:F"],
            progression: {
                1: 1,
            },
        },
    ],
    startingProficiencies: {
        armor: ["light", "medium", "heavy", "{@item shield|phb|shields}"],
        weapons: ["simple", "martial"],
        skills: [
            {
                choose: {
                    from: [
                        "acrobatics",
                        "animal handling",
                        "athletics",
                        "history",
                        "insight",
                        "intimidation",
                        "perception",
                        "survival",
                    ],
                    count: 2,
                },
            },
        ],
    },
};
