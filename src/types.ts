export type Character = {
    name: string;
    clazz: any;
    level: number;
    abilities: AbilityScores;
    skills: Skills;
};

type ProficiencyBonus = 0 | 1 | 2;

export class Proficiency {
    private values: ProficiencyBonus[] = [0, 1, 2];
    constructor(public bonus: ProficiencyBonus = 0) {}
    next() {
        const next = this.values.indexOf(this.bonus) + 1;
        this.bonus = this.values[next > this.values.length - 1 ? 0 : next];
        return this.bonus;
    }
}

export class Ability {
    score: number = 10;
    saveProficiency: boolean = false;

    constructor(public name: string) {}
}

export class AbilityScores {
    str = new Ability("strength");
    dex = new Ability("dexterity");
    con = new Ability("constitution");
    int = new Ability("intelligence");
    wis = new Ability("wisdom");
    cha = new Ability("charisma");
    constructor(clazz?: any) {
        // Prepopulate save proficiencies from class definition.
        clazz?.proficiency.forEach(
            (p: keyof AbilityScores) => (this[p].saveProficiency = true)
        );
    }
}

export class Skill {
    proficiency: Proficiency;

    constructor(public name: string, public type: keyof AbilityScores) {
        this.proficiency = new Proficiency();
    }
}

export class Skills {
    ath: Skill = new Skill("athletics", "str");
    acr: Skill = new Skill("acrobatics", "dex");
    sle: Skill = new Skill("sleight of hand", "dex");
    ste: Skill = new Skill("stealth", "dex");
    arc: Skill = new Skill("arcana", "int");
    his: Skill = new Skill("history", "int");
    inv: Skill = new Skill("investigation", "int");
    nat: Skill = new Skill("nature", "int");
    rel: Skill = new Skill("religion", "int");
    ani: Skill = new Skill("animal handling", "wis");
    ins: Skill = new Skill("insight", "wis");
    med: Skill = new Skill("medicine", "wis");
    per: Skill = new Skill("perception", "wis");
    sur: Skill = new Skill("survival", "wis");
    dec: Skill = new Skill("deception", "cha");
    int: Skill = new Skill("intimidation", "cha");
    perf: Skill = new Skill("performance", "cha");
    pers: Skill = new Skill("persuasion", "cha");
    constructor(skills?: Skills) {
        if (skills != null) {
            Object.entries(skills).forEach(([k, v]: [keyof Skills, Skill]) => {
                this[k].proficiency = new Proficiency(v.proficiency.bonus);
            });
        }
    }
}
