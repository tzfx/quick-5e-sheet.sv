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
    startingEquipment: {
        additionalFromBackground: true,
        default: [
            "any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon} of your choice",
            "a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
            "(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}",
            "{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}",
        ],
        goldAlternative: "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
        defaultData: [
            {
                _: [
                    {
                        equipmentType: "weaponSimple",
                        quantity: 2,
                    },
                ],
            },
            {
                _: ["light crossbow|phb", "crossbow bolts (20)|phb"],
            },
            {
                a: ["studded leather armor|phb"],
                b: ["scale mail|phb"],
            },
            {
                _: ["thieves' tools|phb", "dungeoneer's pack|phb"],
            },
        ],
    },
    multiclassing: {
        requirements: {
            int: 13,
        },
        proficienciesGained: {
            armor: ["light", "medium", "{@item shield|phb|shields}"],
            tools: ["{@item thieves' tools|PHB}", "{@item tinker's tools|PHB}"],
        },
    },
    classTableGroups: [
        {
            colLabels: [
                "{@filter Infusions Known|optionalfeatures|feature type=ai|source=TCE}",
                "Infused Items",
                "{@filter Cantrips Known|spells|level=0|class=artificer}",
            ],
            rows: [
                [0, 0, 2],
                [4, 2, 2],
                [4, 2, 2],
                [4, 2, 2],
                [4, 2, 2],
                [6, 3, 2],
                [6, 3, 2],
                [6, 3, 2],
                [6, 3, 2],
                [8, 4, 3],
                [8, 4, 3],
                [8, 4, 3],
                [8, 4, 3],
                [10, 5, 4],
                [10, 5, 4],
                [10, 5, 4],
                [10, 5, 4],
                [12, 6, 4],
                [12, 6, 4],
                [12, 6, 4],
            ],
        },
        {
            title: "Spell Slots per Spell Level",
            colLabels: [
                "{@filter 1st|spells|level=1|class=Artificer}",
                "{@filter 2nd|spells|level=2|class=Artificer}",
                "{@filter 3rd|spells|level=3|class=Artificer}",
                "{@filter 4th|spells|level=4|class=Artificer}",
                "{@filter 5th|spells|level=5|class=Artificer}",
            ],
            rowsSpellProgression: [
                [2, 0, 0, 0, 0],
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
    classFeatures: [
        "Optional Rule: Firearm Proficiency|Artificer|TCE|1",
        "Magical Tinkering|Artificer|TCE|1",
        "Spellcasting|Artificer|TCE|1",
        "Infuse Item|Artificer|TCE|2",
        {
            classFeature: "Artificer Specialist|Artificer|TCE|3",
            gainSubclassFeature: true,
        },
        "The Right Tool for the Job|Artificer|TCE|3",
        "Ability Score Improvement|Artificer|TCE|4",
        "Proficiency Versatility|Artificer|TCE|4|UAClassFeatureVariants",
        {
            classFeature: "Artificer Specialist Feature|Artificer|TCE|5",
            gainSubclassFeature: true,
        },
        "Tool Expertise|Artificer|TCE|6",
        "Flash of Genius|Artificer|TCE|7",
        "Ability Score Improvement|Artificer|TCE|8",
        "Proficiency Versatility|Artificer|TCE|8|UAClassFeatureVariants",
        {
            classFeature: "Artificer Specialist Feature|Artificer|TCE|9",
            gainSubclassFeature: true,
        },
        "Magic Item Adept|Artificer|TCE|10",
        "Spell-Storing Item|Artificer|TCE|11",
        "Ability Score Improvement|Artificer|TCE|12",
        "Proficiency Versatility|Artificer|TCE|12|UAClassFeatureVariants",
        "Magic Item Savant|Artificer|TCE|14",
        {
            classFeature: "Artificer Specialist Feature|Artificer|TCE|15",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Artificer|TCE|16",
        "Proficiency Versatility|Artificer|TCE|16|UAClassFeatureVariants",
        "Magic Item Master|Artificer|TCE|18",
        "Ability Score Improvement|Artificer|TCE|19",
        "Proficiency Versatility|Artificer|TCE|19|UAClassFeatureVariants",
        "Soul of Artifice|Artificer|TCE|20",
    ],
    subclassTitle: "Artificer Specialist",
    fluff: [
        {
            name: "Artificer",
            type: "section",
            entries: [
                "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections. Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",
                {
                    type: "entries",
                    entries: [
                        {
                            type: "entries",
                            name: "Artificers in Many Worlds",
                            entries: [
                                "Throughout the D&D multiverse, artificers create inventions and magic items of peace and war. Many lives have been brightened or saved because of the work of kind artificers, but countless lives have also been lost because of the mass destruction unleashed by certain artificers' creations.",
                                "In the Forgotten Realms, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the world of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational.",
                                "Artificers in the City of Sigil share discoveries from throughout the multiverse, and from there, the gnome artificer Vi runs a cosmos-spanning business that hires adventurers to fix problems that others deem unfixable. In Vi's home world, Eberron, magic is harnessed as a form of science and deployed throughout society, largely as a result of the wondrous ingenuity of artificers.",
                            ],
                        },
                        {
                            type: "entries",
                            name: "Creating an Artificer",
                            entries: [
                                "To create an artificer, consult the subsections which give you hit points, proficiencies, and starting equipment. Then look at the Artificer table to see which features you get at each level. The descriptions of those features appear below.",
                            ],
                        },
                        {
                            type: "quote",
                            entries: [
                                "Artificers invent cutting-edge problems, then try to solve them-loudly and often with collateral damage.",
                            ],
                            by: "Tasha",
                        },
                        {
                            type: "entries",
                            name: "Multiclassing and the Artificer",
                            entries: [
                                "If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
                                {
                                    type: "entries",
                                    name: "Ability Score Minimum",
                                    entries: [
                                        "As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer.",
                                    ],
                                },
                                {
                                    type: "entries",
                                    name: "Proficiencies Gained",
                                    entries: [
                                        "If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}.",
                                    ],
                                },
                                {
                                    type: "entries",
                                    name: "Spell Slots",
                                    entries: [
                                        "Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            source: "TCE",
        },
        {
            name: "Artificer",
            type: "section",
            entries: [
                "Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting magical objects. To cast a spell, an artificer could use {@item alchemist's supplies|PHB} to create a potent elixir, {@item calligrapher's supplies|PHB} to inscribe a sigil of power on an ally's armor, or {@item tinker's tools|PHB} to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
                {
                    type: "entries",
                    name: "Arcane Science",
                    entries: [
                        "In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magic, allows Eberron's most miraculous projects to continue.",
                        "During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but countless lives were also lost because of the mass destruction unleashed by their creations.",
                    ],
                },
                {
                    type: "entries",
                    name: "Seekers of New Lore",
                    entries: [
                        "Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make their mark must innovate, creating something fresh, rather than iterating on familiar designs.",
                        "This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers seek the frontiers of civilization in hopes of making the next great discovery in arcane research.",
                    ],
                },
                {
                    type: "entries",
                    name: "Creating an Artificer",
                    entries: [
                        "When creating an artificer, think about your character's relationship with the artisan who taught them their craft. Does the character have a rival? Talk to your DM about the role played by artificers in the campaign and the sort of organizations you might have ties to.",
                        {
                            type: "inset",
                            name: "Artificers in Other Worlds",
                            entries: [
                                "Eberron is the world most associated with artificers, yet the class can be found throughout the D&D multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular\u2014the gnome inventor Vi\u2014has run a multiverse-spanning business from there since leaving the world of her birth, Eberron. In the world-city Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds\u2014except, perhaps, by the tinker gnomes of Krynn.",
                            ],
                        },
                        {
                            type: "entries",
                            name: "Quick Build",
                            entries: [
                                "You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the {@background guild artisan} background.",
                            ],
                        },
                        {
                            type: "entries",
                            name: "Optional Rule: Multiclassing",
                            entries: [
                                "If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
                                {
                                    type: "entries",
                                    name: "Ability Score Minimum",
                                    entries: [
                                        "As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer.",
                                    ],
                                },
                                {
                                    type: "entries",
                                    name: "Proficiencies Gained",
                                    entries: [
                                        "If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}.",
                                    ],
                                },
                                {
                                    type: "entries",
                                    name: "Spell Slots",
                                    entries: [
                                        "Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            source: "ERLW",
            page: 54,
        },
    ],
};
