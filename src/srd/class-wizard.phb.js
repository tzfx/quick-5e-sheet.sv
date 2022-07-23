export const wizard = {
    name: "Wizard",
    source: "PHB",
    page: 112,
    srd: true,
    basicRules: true,
    hd: {
        number: 1,
        faces: 6,
    },
    proficiency: ["int", "wis"],
    spellcastingAbility: "int",
    casterProgression: "full",
    preparedSpells: "<$level$> + <$int_mod$>",
    cantripProgression: [
        3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    ],
    spellsKnownProgressionFixed: [
        6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    ],
    spellsKnownProgressionFixedAllowLowerLevel: true,
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
                        "history",
                        "insight",
                        "investigation",
                        "medicine",
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
            "(a) a {@item quarterstaff|phb} or (b) a {@item dagger|phb}",
            "(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
            "(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}",
            "A {@item spellbook|phb}",
        ],
        goldAlternative: "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
        defaultData: [
            {
                a: ["quarterstaff|phb"],
                b: ["dagger|phb"],
            },
            {
                a: ["component pouch|phb"],
                b: ["arcane focus|phb"],
            },
            {
                a: ["scholar's pack|phb"],
                b: ["explorer's pack|phb"],
            },
            {
                _: ["spellbook|phb"],
            },
        ],
    },
    multiclassing: {
        requirements: {
            int: 13,
        },
    },
    classTableGroups: [
        {
            colLabels: ["{@filter Cantrips Known|spells|level=0|class=Wizard}"],
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
                "{@filter 1st|spells|level=1|class=Wizard}",
                "{@filter 2nd|spells|level=2|class=Wizard}",
                "{@filter 3rd|spells|level=3|class=Wizard}",
                "{@filter 4th|spells|level=4|class=Wizard}",
                "{@filter 5th|spells|level=5|class=Wizard}",
                "{@filter 6th|spells|level=6|class=Wizard}",
                "{@filter 7th|spells|level=7|class=Wizard}",
                "{@filter 8th|spells|level=8|class=Wizard}",
                "{@filter 9th|spells|level=9|class=Wizard}",
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
        "Arcane Recovery|Wizard||1",
        "Spellcasting|Wizard||1",
        "Cantrip Versatility|Wizard||1|UAClassFeatureVariants",
        {
            classFeature: "Arcane Tradition|Wizard||2",
            gainSubclassFeature: true,
        },
        "Cantrip Formulas|Wizard||3|TCE",
        "Ability Score Improvement|Wizard||4",
        "Proficiency Versatility|Wizard||4|UAClassFeatureVariants",
        {
            classFeature: "Arcane Tradition feature|Wizard||6",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Wizard||8",
        "Proficiency Versatility|Wizard||8|UAClassFeatureVariants",
        {
            classFeature: "Arcane Tradition feature|Wizard||10",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Wizard||12",
        "Proficiency Versatility|Wizard||12|UAClassFeatureVariants",
        {
            classFeature: "Arcane Tradition feature|Wizard||14",
            gainSubclassFeature: true,
        },
        "Ability Score Improvement|Wizard||16",
        "Proficiency Versatility|Wizard||16|UAClassFeatureVariants",
        "Spell Mastery|Wizard||18",
        "Ability Score Improvement|Wizard||19",
        "Proficiency Versatility|Wizard||19|UAClassFeatureVariants",
        "Signature Spells|Wizard||20",
    ],
    subclassTitle: "Arcane Tradition",
    fluff: [
        {
            name: "Wizard",
            type: "section",
            entries: [
                "Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.",
                "Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.",
                "Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.",
                "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
                {
                    type: "entries",
                    name: "Scholars of the Arcane",
                    entries: [
                        "Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.",
                        "Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.",
                    ],
                },
                {
                    type: "entries",
                    name: "The Lure of Knowledge",
                    entries: [
                        "Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.",
                        "But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.",
                    ],
                },
                {
                    type: "entries",
                    name: "Creating a Wizard",
                    entries: [
                        "Creating a wizard character demands a backstory dominated by at least one extraordinary event. How did your character first come into contact with magic? How did you discover you had an aptitude for it? Do you have a natural talent, or did you simply study hard and practice incessantly? Did you encounter a magical creature or an ancient tome that taught you the basics of magic?",
                        "What drew you forth from your life of study? Did your first taste of magical knowledge leave you hungry for more? Have you received word of a secret repository of knowledge not yet plundered by any other wizard? Perhaps you're simply eager to put your newfound magical skills to the test in the face of danger.",
                        {
                            type: "entries",
                            name: "Quick Build",
                            entries: [
                                "You can make a wizard quickly by following these suggestions. First, Intelligence should be your highest ability score, followed by Constitution or Dexterity. If you plan to join the School of Enchantment, make Charisma your next-best score. Second, choose the {@background sage} background. Third, choose the {@spell mage hand}, {@spell light}, and {@spell ray of frost} cantrips, along with the following 1st-level spells for your spellbook: {@spell burning hands}, {@spell charm person}, {@spell feather fall}, {@spell mage armor}, {@spell magic missile}, and {@spell sleep}.",
                            ],
                        },
                    ],
                },
            ],
            page: 112,
            source: "PHB",
        },
        {
            type: "section",
            entries: [
                {
                    type: "quote",
                    entries: [
                        "Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries.",
                    ],
                    by: "Gimble the illusionist",
                },
                "Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast spells with world-shaking effects.",
                "The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.",
                "If you're playing a wizard, take advantage of the opportunity to make your character more than just a stereotypical spell-slinger. Use the advice that follows to add some intriguing details to how your wizard interacts with the world.",
                {
                    type: "entries",
                    name: "Spellbook",
                    entries: [
                        "Your wizard character's most prized possession\u2014your spellbook\u2014might be an innocuous-looking volume whose covers show no hint of what's inside. Or you might display some flair, as many wizards do, by carrying a spellbook of an unusual sort. If you don't own such an item already, one of your goals might be to find a spellbook that sets you apart by its appearance or its means of manufacture.",
                        {
                            type: "table",
                            caption: "Spellbooks",
                            colLabels: ["{@dice d6}", "Spellbook"],
                            colStyles: ["col-1 text-center", "col-11"],
                            rows: [
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 1,
                                        },
                                    },
                                    "A tome with pages that are thin sheets of metal, spells etched into them with acid",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 2,
                                        },
                                    },
                                    "Long straps of leather on which spells are written, wrapped around a staff for ease of transport",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 3,
                                        },
                                    },
                                    "A battered tome filled with pictographs that only you can understand",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 4,
                                        },
                                    },
                                    "Small stones inscribed with spells and kept in a cloth bag",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 5,
                                        },
                                    },
                                    "A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 6,
                                        },
                                    },
                                    "A tome full of black pages whose writing is visible only in dim light or darkness",
                                ],
                            ],
                        },
                    ],
                },
                {
                    type: "entries",
                    name: "Ambition",
                    entries: [
                        "Few aspiring wizards undertake the study of magic without some personal goal in mind. Many wizards use their spells as a tool to produce a tangible benefit, in material goods or in status, for themselves or their companions. For others, the theoretical aspect of magic might have a strong appeal, pushing those wizards to seek out knowledge that supports new theories of the arcane or confirms old ones.",
                        "Beyond the obvious, why does your wizard character study magic, and what do you want to achieve? If you haven't given these questions much thought, you can do so now, and the answers you come up with will likely affect how your future unfolds.",
                        {
                            type: "table",
                            caption: "Ambitions",
                            colLabels: ["{@dice d6}", "Ambition"],
                            colStyles: ["col-1 text-center", "col-11"],
                            rows: [
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 1,
                                        },
                                    },
                                    "You will prove that the gods aren't as powerful as folk believe.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 2,
                                        },
                                    },
                                    "Immortality is the end goal of your studies.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 3,
                                        },
                                    },
                                    "If you can fully understand magic, you can unlock its use for all and usher in an era of equality.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 4,
                                        },
                                    },
                                    "Magic is a dangerous tool. You use it to protect what you treasure.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 5,
                                        },
                                    },
                                    "Arcane power must be taken away from those who would abuse it.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 6,
                                        },
                                    },
                                    "You will become the greatest wizard the world has seen in generations.",
                                ],
                            ],
                        },
                    ],
                },
                {
                    type: "entries",
                    name: "Eccentricity",
                    entries: [
                        "Endless hours of solitary study and research can have a negative effect on anyone's social skills. Wizards, who are a breed apart to begin with, are no exception. An odd mannerism or two is not necessarily a drawback, though; an eccentricity of this sort is usually harmless and could provide a source of amusement or serve as a calling card of sorts.",
                        "If your character has an eccentricity, is it a physical tic or a mental one? Are you well known in some circles because of it? Do you fight to overcome it, or do you embrace this minor claim to fame of yours?",
                        {
                            type: "table",
                            caption: "Eccentricities",
                            colLabels: ["{@dice d6}", "Eccentricity"],
                            colStyles: ["col-1 text-center", "col-11"],
                            rows: [
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 1,
                                        },
                                    },
                                    "You have the habit of tapping your foot incessantly, which often annoys those around you.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 2,
                                        },
                                    },
                                    "Your memory is quite good, but you have no trouble pretending to be absentminded when it suits your purposes.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 3,
                                        },
                                    },
                                    "You never enter a room without looking to see what's hanging from the ceiling.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 4,
                                        },
                                    },
                                    "Your most prized possession is a dead worm that you keep inside a potion vial.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 5,
                                        },
                                    },
                                    "When you want people to leave you alone, you start talking to yourself. That usually does the trick.",
                                ],
                                [
                                    {
                                        type: "cell",
                                        roll: {
                                            exact: 6,
                                        },
                                    },
                                    "Your fashion sense and grooming, or more accurately lack thereof, sometimes cause others to assume you are a beggar.",
                                ],
                            ],
                        },
                    ],
                },
            ],
            page: 58,
            source: "XGE",
        },
    ],
};
