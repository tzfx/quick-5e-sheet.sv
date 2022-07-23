<script lang="ts">
    import type { Character } from "./types";
    import { classes } from "./srd/classes";
    import { getLazy } from "./utils/lazy";
    import { randomName } from "./srd/names/names";
    import Ability from "./Ability.svelte";
    import Skill from "./Skill.svelte";

    export let character: Character;
    export let save: (character: Character) => void;

    const trySave = () => {
        if (![null, ""].includes(character.name)) save(character);
    };
</script>

<div>
    <p class="p-1 text-gray-700 font-light mt-2">
        A tool for
        <input
            type="text"
            placeholder={randomName()}
            class="w-32"
            bind:value={character.name}
        />, the {getLazy()}
        <select
            on:change={(e) => {
                character.clazz = classes[e.currentTarget.value];
                trySave();
            }}
        >
            {#each Object.values(classes) as clazz}
                {#if character.clazz.name === clazz.name}
                    <option value={clazz.name.toLowerCase()} selected
                        >{clazz.name}</option
                    >
                {:else}
                    <option value={clazz.name.toLowerCase()}
                        >{clazz.name}</option
                    >
                {/if}
            {/each}
        </select>, who is level
        <input
            on:change={() => {
                trySave();
            }}
            bind:value={character.level}
            max="20"
            min="1"
            type="number"
        />.
    </p>
    <hr />
    <div>
        <h2>Abilities</h2>
        <div class="flex flex-row justify-center">
            {#each Object.values(character.abilities) as ability}
                <Ability {ability} />
            {/each}
        </div>
    </div>
    <hr />
    <div>
        <h2>Skills</h2>
        {#each Object.values(character.skills) as skill}
            <Skill {skill} abilities={character.abilities} />
        {/each}
    </div>
</div>
