<script lang="ts">
    import type { AbilityScores, Skill } from "./types";
    import { mod } from "./utils/mod";
    export let skill: Skill;
    export let abilities: AbilityScores;

    const score = abilities[skill.type].score;
</script>

<div>
    {skill.name}
    {abilities[skill.type].score}
    {mod(score) + skill.proficiency}
</div>
