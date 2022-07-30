<script lang="ts">
    import type { Character } from "./types";
    import { classes } from "./srd/classes";
    import { getLazy } from "./utils/lazy";
    import { randomName } from "./srd/names/names";
    import Ability from "./Ability.svelte";
    import Skill from "./Skill.svelte";
    import { mod, proficiency } from "./utils/mod";

    export let character: Character;
    export let save: (character: Character) => void;

    let abilitieslocked = true;
    let skillslocked = true;
    let proficiencyBonus = 2;

    let blob = new Blob([JSON.stringify(character)], {
        type: "application/json",
    });

    let dl = URL.createObjectURL(blob);

    const trySave = () => {
        if (![null, ""].includes(character.name)) save(character);
        blob = new Blob([JSON.stringify(character)], {
            type: "application/json",
        });
        dl = URL.createObjectURL(blob);
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
                Object.keys(character.abilities).forEach(
                    (k) =>
                        (character.abilities[k].saveProficiency =
                            character.clazz.proficiency.includes(k))
                );
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
                proficiencyBonus = proficiency(character.level);
            }}
            bind:value={character.level}
            max="20"
            min="1"
            type="number"
        />.
        <a
            hidden={[null, ""].includes(character.name)}
            download={character.name + ".json"}
            href={dl}
            title="download"><i class="las la-lg la-cloud-download-alt" /></a
        >
    </p>
    <hr />
    <div>
        <h2>
            Abilities <i
                on:click={() => (abilitieslocked = !abilitieslocked)}
                class="las {abilitieslocked ? 'la-lock' : 'la-unlock'}"
            />
        </h2>
        <div class="flex flex-row justify-center">
            {#each Object.values(character.abilities) as ability}
                <Ability
                    onchange={() => trySave()}
                    locked={abilitieslocked}
                    {ability}
                />
            {/each}
        </div>
    </div>
    <hr />
    <div>
        <h2>
            Skills <i
                on:click={() => (skillslocked = !skillslocked)}
                class="las {skillslocked ? 'la-lock' : 'la-unlock'}"
            />
        </h2>
        <div class="flex md:flex-row flex-col justify-center">
            {#each Object.entries(Object.values(character.skills).reduce( (p, c) => {
                        if (p[c.type] == null) {
                            p[c.type] = [c];
                        } else {
                            p[c.type].push(c);
                        }
                        return p;
                    }, {} )) as sbt}
                <div class="border-2 m-2">
                    <h3>{sbt[0]}</h3>
                    {#each sbt[1] as skill}
                        <Skill
                            onchange={() => trySave()}
                            {proficiencyBonus}
                            locked={skillslocked}
                            abilityscore={character.abilities[sbt[0]].score}
                            {skill}
                        />
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>
