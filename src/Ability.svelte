<script lang="ts">
    import type { Ability } from "./types";
    import { mod } from "./utils/mod";
    export let ability: Ability;
</script>

<div class="p-3 flex flex-col">
    <h3>{ability.name}</h3>
    {mod(ability.score)}
    <input type="number" bind:value={ability.score} min="0" max="20" />
    <i
        title="saving throw"
        class={`las ${ability.proficiency ? "la-check-circle" : "la-circle"}`}
    />
</div>
