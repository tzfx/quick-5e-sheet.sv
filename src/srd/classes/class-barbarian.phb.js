export const barbarian = {
    name: "Barbarian",
    source: "PHB",
    page: 46,
    srd: true,
    hd: {
        number: 1,
        faces: 12,
    },
    proficiency: ["str", "con"],
    startingProficiencies: {
        armor: ["light", "medium", "{@item shield|phb|shields}"],
        weapons: ["simple", "martial"],
        skills: [
            {
                choose: {
                    from: [
                        "animal handling",
                        "athletics",
                        "intimidation",
                        "nature",
                        "perception",
                        "survival",
                    ],
                    count: 2,
                },
            },
        ],
    },
};
