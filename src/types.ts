export type Character = {
    name: string;
    clazz: any;
    level: number;
    abilities: AbilityScores;
    skills: Skills;
};

export type Proficiency = 0 | 0.5 | 1 | 2;

export class Ability {
    score: number = 10;
    proficiency: Proficiency = 0;

    constructor(public name: string) {}
}

export class AbilityScores {
    str = new Ability("strength");
    dex = new Ability("dexterity");
    con = new Ability("constitution");
    int = new Ability("intelligence");
    wis = new Ability("wisdom");
    cha = new Ability("charisma");
}

export class Skill {
    proficiency: Proficiency;

    constructor(public name: string, public type: keyof AbilityScores) {
        this.proficiency = 0;
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
}
