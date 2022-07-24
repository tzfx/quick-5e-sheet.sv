<script lang="ts">
    import type { Ability } from "./types";
    import { mod } from "./utils/mod";
    export let ability: Ability;
    export let locked: boolean;
    export let onchange: () => void;
</script>

<div class="p-3 flex flex-col">
    <h3 class="mx-auto">{ability.name}</h3>
    <span class="mx-auto text-xl">{mod(ability.score)}</span>
    <input
        type="number"
        disabled={locked}
        bind:value={ability.score}
        on:change={onchange}
        class="w-min mx-auto text-xs"
        min="0"
        max="20"
    />
    <i
        title="saving throw"
        class="text-lg mx-auto las {ability.saveProficiency
            ? 'la-check-circle'
            : 'la-circle'}"
    />
</div>
