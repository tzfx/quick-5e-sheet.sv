export const sorcerer = {
    name: "Sorcerer",
    source: "PHB",
    page: 99,
    srd: true,
    hd: {
        number: 1,
        faces: 6,
    },
    proficiency: ["con", "cha"],
    spellcastingAbility: "cha",
    casterProgression: "full",
    cantripProgression: [
        4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    ],
    spellsKnownProgression: [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15,
    ],
    optionalfeatureProgression: [
        {
            name: "Metamagic",
            featureType: ["MM"],
            progression: {
                3: 2,
                10: 3,
                17: 4,
            },
        },
    ],
    startingProficiencies: {
        weapons: [
            "{@item dagger|phb|daggers}",
            "{@item dart|phb|darts}",
            "{@item sling|phb|slings}",
            "{@item quarterstaff|phb|quarterstaffs}",
            "{@item light crossbow|phb|light crossbows}",
        ],
        skills: [
            {
                choose: {
                    from: [
                        "arcana",
                        "deception",
                        "insight",
                        "intimidation",
                        "persuasion",
                        "religion",
                    ],
                    count: 2,
                },
            },
        ],
    },
};
