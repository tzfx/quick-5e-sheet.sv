export const cleric = {
    name: "Cleric",
    source: "PHB",
    page: 56,
    srd: true,
    basicRules: true,
    hd: {
        number: 1,
        faces: 8,
    },
    proficiency: ["wis", "cha"],
    spellcastingAbility: "wis",
    casterProgression: "full",
    preparedSpells: "<$level$> + <$wis_mod$>",
    cantripProgression: [
        3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    ],
    startingProficiencies: {
        armor: ["light", "medium", "{@item shield|phb|shields}"],
        weapons: ["simple"],
        skills: [
            {
                choose: {
                    from: [
                        "history",
                        "insight",
                        "medicine",
                        "persuasion",
                        "religion",
                    ],
                    count: 2,
                },
            },
        ],
    },
    startingEquipment: {
        additionalFromBackground: true,
        default: [
            "(a) a {@item mace|phb} or (b) a {@item warhammer|phb} (if proficient)",
            "(a) {@item scale mail|phb}, (b) {@item leather armor|phb}, or (c) {@item chain mail|phb} (if proficient)",
            "(a) a {@item light crossbow|phb} and {@item Crossbow Bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
            "(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}",
            "A {@item shield|phb} and a {@item holy symbol|phb}",
        ],
        goldAlternative: "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
        defaultData: [
            {
                a: ["mace|phb"],
                b: ["warhammer|phb"],
            },
            {
                a: ["scale mail|phb"],
                b: ["leather armor|phb"],
                c: ["chain mail|phb"],
            },
            {
                a: ["light crossbow|phb", "Crossbow Bolts (20)|phb"],
                b: [
                    {
                        equipmentType: "weaponSimple",
                    },
                ],
            },
            {
                a: ["priest's pack|phb"],
                b: ["explorer's pack|phb"],
            },
            {
                _: ["shield|phb", "holy symbol|phb"],
            },
        ],
    },
    multiclassing: {
        requirements: {
            wis: 13,
        },
        proficienciesGained: {
            armor: ["light", "medium", "{@item shield|phb|shields}"],
        },
    },
    classTableGroups: [
        {
            colLabels: ["{@filter Cantrips Known|spells|level=0|class=Cleric}"],
            rows: [
                [3],
                [3],
                [3],
                [4],
                [4],
                [4],
                [4],
                [4],
                [4],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
                [5],
            ],
        },
        {
            title: "Spell Slots per Spell Level",
            colLabels: [
                "{@filter 1st|spells|level=1|class=Cleric}",
                "{@filter 2nd|spells|level=2|class=Cleric}",
                "{@filter 3rd|spells|level=3|class=Cleric}",
                "{@filter 4th|spells|level=4|class=Cleric}",
                "{@filter 5th|spells|level=5|class=Cleric}",
                "{@filter 6th|spells|level=6|class=Cleric}",
                "{@filter 7th|spells|level=7|class=Cleric}",
                "{@filter 8th|spells|level=8|class=Cleric}",
                "{@filter 9th|spells|level=9|class=Cleric}",
            ],
            rowsSpellProgression: [
                [2, 0, 0, 0, 0, 0, 0, 0, 0],
                [3, 0, 0, 0, 0, 0, 0, 0, 0],
                [4, 2, 0, 0, 0, 0, 0, 0, 0],
                [4, 3, 0, 0, 0, 0, 0, 0, 0],
                [4, 3, 2, 0, 0, 0, 0, 0, 0],
                [4, 3, 3, 0, 0, 0, 0, 0, 0],
                [4, 3, 3, 1, 0, 0, 0, 0, 0],
                [4, 3, 3, 2, 0, 0, 0, 0, 0],
                [4, 3, 3, 3, 1, 0, 0, 0, 0],
                [4, 3, 3, 3, 2, 0, 0, 0, 0],
                [4, 3, 3, 3, 2, 1, 0, 0, 0],
                [4, 3, 3, 3, 2, 1, 0, 0, 0],
                [4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 3, 3, 3, 2, 1, 1, 0, 0],
                [4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 3, 3, 3, 2, 1, 1, 1, 0],
                [4, 3, 3, 3, 2, 1, 1, 1, 1],
                [4, 3, 3, 3, 3, 1, 1, 1, 1],
                [4, 3, 3, 3, 3, 2, 1, 1, 1],
                [4, 3, 3, 3, 3, 2, 2, 1, 1],
            ],
        },
    ],
    classFeatures: [
        "Spellcasting|Cleric||1",
        "Cantrip Versatility|Cleric||1|UAClassFeatureVariants",
        {
            classFeature: "Divine Domain|Cleric||1",
            gainSubclassFeature: true,
        },
        {
            classFeature: "Channel Divinity|Cleric||2",
            tableDisplayName: "Channel Divinity (1/rest)",
        },
        "Channel Divinity: Harness Divine Power|Cleric||2|UAClassFeatureVariants",
        "Channel Divinity: Harness Divine Power|Cleric||2|TCE",
        {
            classFeature: "Divine Domain feature|Cleric||2",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Cleric||4",
        "Proficiency Versatility|Cleric||4|UAClassFeatureVariants",
        "Cantrip Versatility|Cleric||4|TCE",
        "Destroy Undead (CR 1/2)|Cleric||5",
        {
            classFeature: "Channel Divinity|Cleric||6",
            tableDisplayName: "Channel Divinity (2/rest)",
        },
        {
            classFeature: "Divine Domain feature|Cleric||6",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Cleric||8",
        "Proficiency Versatility|Cleric||8|UAClassFeatureVariants",
        "Destroy Undead (CR 1)|Cleric||8",
        {
            classFeature: "Divine Domain feature|Cleric||8",
            gainSubclassFeature: true,
        },
        "Divine Intervention|Cleric||10",
        "Destroy Undead (CR 2)|Cleric||11",
        "Ability Score Improvement|Cleric||12",
        "Proficiency Versatility|Cleric||12|UAClassFeatureVariants",
        "Destroy Undead (CR 3)|Cleric||14",
        "Ability Score Improvement|Cleric||16",
        "Proficiency Versatility|Cleric||16|UAClassFeatureVariants",
        "Destroy Undead (CR 4)|Cleric||17",
        {
            classFeature: "Divine Domain feature|Cleric||17",
            gainSubclassFeature: true,
        },
        {
            classFeature: "Channel Divinity|Cleric||18",
            tableDisplayName: "Channel Divinity (3/rest)",
        },
        "Ability Score Improvement|Cleric||19",
        "Proficiency Versatility|Cleric||19|UAClassFeatureVariants",
        "Divine Intervention Improvement|Cleric||20",
    ],
    subclassTitle: "Divine Domain",
    fluff: [
        {
            name: "Cleric",
            type: "section",
            entries: [
                "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.",
                "Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe's fall.",
                "Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.",
                "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
                {
                    type: "entries",
                    name: "Healers and Warriors",
                    entries: [
                        "Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.",
                        "Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.",
                        "Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.",
                    ],
                },
                {
                    type: "entries",
                    name: "Divine Agents",
                    entries: [
                        "Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods' will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.",
                        "When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities' worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.",
                        "Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand it.",
                    ],
                },
                {
                    type: "entries",
                    name: "Creating a Cleric",
                    entries: [
                        "As you create a cleric, the most important question to consider is which deity to serve and what principles you want your character to embody. Appendix B includes lists of many of the gods of the multiverse. Check with your DM to learn which deities are in your campaign.",
                        "Once you've chosen a deity, consider your cleric's relationship to that god. Did you enter this service willingly? Or did the god choose you, impelling you into service with no regard for your wishes? How do the temple priests of your faith regard you: as a champion or a troublemaker? What are your ultimate goals? Does your deity have a special task in mind for you? Or are you striving to prove yourself worthy of a great quest?",
                        {
                            type: "entries",
                            name: "Quick Build",
                            entries: [
                                "You can make a cleric quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Strength or Constitution. Second, choose the {@background acolyte} background.",
                            ],
                        },
                    ],
                },
            ],
            source: "PHB",
            page: 56,
        },
        {
            type: "section",
            entries: [
                {
                    type: "quote",
                    entries: [
                        "To become a cleric is to become a messenger of the gods. The power the divine offers is great, but it always comes with tremendous responsibility.",
                    ],
                    by: "Riggby the patriarch",
                },
                "Almost all the folk in the world who revere a deity live their lives without ever being directly touched by a divine being. As such, they can never know what it feels like to be a cleric\u2014someone who is not only a devout worshiper, but who has also been invested with a measure of a deity's power.",
                "The question has long been debated: Does a mortal become a cleric as a consequence of deep devotion to one's deity, thereby attracting the god's favor? Or is it the deity who sees the potential in a person and calls that individual into service? Ultimately, perhaps, the answer doesn't matter. However clerics come into being, the world needs clerics as much as clerics and deities need each other.",
                "If you're playing a cleric character, the following sections offer ways to add some detail to that character's history and personality.",
                {
                    type: "entries",
                    name: "Temple",
                    entries: [
                        "Most clerics start their lives of service as priests in an order, then later realize that they have been blessed by their god with the qualities needed to become a cleric. To prepare for this new duty, candidates typically receive instruction from a cleric of a temple or another place of study devoted to their deity.",
                        "Some temples are cut off from the world so that their occupants can focus on devotions, while other temples open their doors to minister to and heal the masses. What is noteworthy about the temple you studied at?",
                        {
                            type: "table",
                            caption: "Temple",
                            colLabels: ["{@dice d6}", "Temple"],
                            colStyles: ["col-1 text-center", "col-11"],
                            rows: [
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 1,
                                        },
                                    },
                                    "Your temple is said to be the oldest surviving structure built to honor your god.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 2,
                                        },
                                    },
                                    "Acolytes of several like-minded deities all received instruction together in your temple.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 3,
                                        },
                                    },
                                    "You come from a temple famed for the brewery it operates. Some say you smell like one of its ales.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 4,
                                        },
                                    },
                                    "Your temple is a fortress and a proving ground that trains warrior-priests.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 5,
                                        },
                                    },
                                    "Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 6,
                                        },
                                    },
                                    "You served in a temple in the Outer Planes.",
                                ],
                            ],
                        },
                        {
                            type: "entries",
                            name: "Keepsake",
                            entries: [
                                "Many clerics have items among their personal gear that symbolize their faith, remind them of their vows, or otherwise help to keep them on their chosen paths. Even though such an item is not imbued with divine power, it is vitally important to its owner because of what it represents.",
                                {
                                    type: "table",
                                    caption: "Keepsake",
                                    colLabels: ["{@dice d6}", "Keepsake"],
                                    colStyles: ["col-1 text-center", "col-11"],
                                    rows: [
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 1,
                                                },
                                            },
                                            "The finger bone of a saint",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 2,
                                                },
                                            },
                                            "A metal-bound book that tells how to hunt and destroy infernal creatures",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 3,
                                                },
                                            },
                                            "A pig's whistle that reminds you of your humble and beloved mentor",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 4,
                                                },
                                            },
                                            "A braid of hair woven from the tail of a unicorn",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 5,
                                                },
                                            },
                                            "A scroll that describes how best to rid the world of necromancers",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 6,
                                                },
                                            },
                                            "A runestone said to be blessed by your god",
                                        ],
                                    ],
                                },
                            ],
                        },
                        {
                            type: "entries",
                            name: "Secret",
                            entries: [
                                "No mortal soul is entirely free of second thoughts or doubt. Even a cleric must grapple with dark desires or the forbidden attraction of turning against the teachings of one's deity.",
                                "If you haven't considered this aspect of your character yet, see the table entries for some possibilities, or use them for inspiration. Your deep, dark secret might involve something you did (or are doing), or it could be rooted in the way you feel about the world and your role in it.",
                                {
                                    type: "table",
                                    caption: "Secret",
                                    colLabels: ["{@dice d6}", "Secret"],
                                    colStyles: ["col-1 text-center", "col-11"],
                                    rows: [
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 1,
                                                },
                                            },
                                            "An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful.",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 2,
                                                },
                                            },
                                            "You believe that, in the final analysis, the gods are nothing more than ultrapowerful mortal creatures.",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 3,
                                                },
                                            },
                                            "You acknowledge the power of the gods, but you think that most events are dictated by pure chance.",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 4,
                                                },
                                            },
                                            "Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself.",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 5,
                                                },
                                            },
                                            "You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression.",
                                        ],
                                        [
                                            {
                                                type: "cell",
                                                roll: {
                                                    exact: 6,
                                                },
                                            },
                                            "In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness.",
                                        ],
                                    ],
                                },
                            ],
                        },
                        {
                            type: "inset",
                            name: "Serving a Pantheon, Philosophy, or Force",
                            entries: [
                                "The typical cleric is an ordained servant of a particular god and chooses a Divine Domain associated with that deity. The cleric's magic flows from the god or the god's sacred realm, and often the cleric bears a holy symbol that represents that divinity.",
                                'Some clerics, especially in a world like Eberron, serve a whole pantheon, rather than a single deity. In certain campaigns, a cleric might instead serve a cosmic force, such as life or death, or a philosophy or concept, such as love, peace, or one of the nine alignments. Chapter 1 of the Dungeon Master\'s Guide explores options like these, in the section "Gods of Your World."',
                                "Talk with your DM about the divine options available in your campaign, whether they're gods, pantheons, philosophies, or cosmic forces. Whatever being or thing your cleric ends up serving, choose a Divine Domain that is appropriate for it, and if it doesn't have a holy symbol, work with your DM to design one.",
                                "The cleric's class features often refer to your deity. If you are devoted to a pantheon, cosmic force, or philosophy, your cleric features still work for you as written. Think of the references to a god as references to the divine thing you serve that gives you your magic.",
                            ],
                        },
                    ],
                },
            ],
            source: "XGE",
            page: 17,
        },
    ],
};
