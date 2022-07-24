<script lang="ts">
    import type { AbilityScores, Skill } from "./types";
    import { mod } from "./utils/mod";
    export let skill: Skill;
    export let abilities: AbilityScores;
    export let proficiencyBonus: number;
    export let onchange: () => void;

    const score = abilities[skill.type].score;
</script>

<div class="text-right">
    {skill.name}
    {mod(score)} +{skill.proficiency.bonus * proficiencyBonus}
    <i
        title="proficient"
        on:click={() => {
            skill.proficiency.bonus = skill.proficiency.next();
            onchange();
        }}
        class="text-lg mx-auto las {skill.proficiency.bonus === 0
            ? 'la-circle'
            : skill.proficiency.bonus === 1
            ? 'la-check-circle'
            : skill.proficiency.bonus === 2 && 'la-check-double'}"
    />
</div>
