<script lang="ts">
    import type { Skill } from "./types";
    import { modraw } from "./utils/mod";
    import { skills } from "./srd/skills";

    export let abilityscore: number;
    export let locked: boolean = true;
    export let onchange: () => void;
    export let proficiencyBonus: number;
    export let skill: Skill;

    let modifier: number;

    let updateModifier = () =>
        (modifier =
            modraw(abilityscore) + skill.proficiency.bonus * proficiencyBonus);

    updateModifier();

    const skilldata = skills.find(
        (s) => s.name.toLowerCase() === skill.name.toLowerCase()
    );
</script>

<div class="text-right">
    <span
        class="cursor-help"
        title={skilldata.entries
            .map((e) =>
                typeof e === "object" && e.items != null
                    ? "\n" + e.items.map((i) => "- " + i).join("\n")
                    : e
            )
            .join("\n")}>{skill.name}</span
    >
    {modifier > 0 ? "+" + modifier : modifier}
    <button
        title="proficient"
        on:click={() => {
            if (!locked) {
                skill.proficiency.bonus = skill.proficiency.next();
                updateModifier();
                onchange();
            }
        }}
        disabled={locked}
        class="text-lg mx-auto las {skill.proficiency.bonus === 0
            ? 'la-circle'
            : skill.proficiency.bonus === 1
            ? 'la-check-circle'
            : skill.proficiency.bonus === 2 && 'la-check-double'}"
    />
</div>
