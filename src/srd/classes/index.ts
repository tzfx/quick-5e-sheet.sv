import { artificer } from "./class-artificer.tce";
import { barbarian } from "./class-barbarian.phb";
import { bard } from "./class-bard.phb";
import { cleric } from "./class-cleric.phb";
import { druid } from "./class-druid.phb";
import { fighter } from "./class-fighter.phb";
import { monk } from "./class-monk.phb";
import { paladin } from "./class-paladin.phb";
import { ranger } from "./class-ranger.phb";
import { rogue } from "./class-rogue.phb";
import { sorcerer } from "./class-sorcerer.phb";
import { warlock } from "./class-warlock.phb";
import { wizard } from "./class-wizard.phb";

export const classes = {
    artificer,
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorcerer,
    warlock,
    wizard,
};

export const randomClass = () =>
    classes[
        Object.keys(classes)[
            Math.floor(Math.random() * Object.keys(classes).length)
        ]
    ];
