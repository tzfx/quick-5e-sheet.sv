export const monk = {
    name: "Monk",
    source: "PHB",
    page: 76,
    srd: true,
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["str", "dex"],
    startingProficiencies: {
        weapons: ["simple", "{@item shortsword|ßphb|shortswords}"],
        tools: [
            "any one type of {@item artisan's tools|PHB} or any one {@item musical instrument|PHB} of your choice",
        ],
        skills: [
            {
                choose: {
                    from: [
                        "acrobatics",
                        "athletics",
                        "history",
                        "insight",
                        "religion",
                        "stealth",
                    ],
                    count: 2,
                },
            },
        ],
    },
    startingEquipment: {
        additionalFromBackground: true,
        default: [
            "(a) a {@item shortsword|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
            "(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
            "10 {@item dart|phb|darts}",
        ],
        goldAlternative: "{@dice 5d4|5d4|Starting Gold}",
        defaultData: [
            {
                a: ["shortsword|phb"],
                b: [
                    {
                        equipmentType: "weaponSimple",
                    },
                ],
            },
            {
                a: ["dungeoneer's pack|phb"],
                b: ["explorer's pack|phb"],
            },
            {
                _: [
                    {
                        item: "dart|phb",
                        quantity: 10,
                    },
                ],
            },
        ],
    },
};
