<script lang="ts">
    import type { Character } from "./types";
    import { classes } from "./srd/classes";
    import { getLazy } from "./utils/lazy";
    import { randomName } from "./srd/names/names";
    import Ability from "./Ability.svelte";
    import Skill from "./Skill.svelte";
    import { modraw, proficiency } from "./utils/mod";
    import { encode } from "./utils/encode-decode";

    export let character: Character;
    export let save: (character: Character) => void;

    let abilitieslocked = true;
    let skillslocked = true;
    let proficiencyBonus = proficiency(character.level);

    let blob = new Blob([encode(character)], {
        type: "text/plain",
    });

    let dl = URL.createObjectURL(blob);

    const trySave = () => {
        if (![null, ""].includes(character.name)) {
            save(character);
            blob = new Blob([JSON.stringify(character)], {
                type: "application/json",
            });
            dl = URL.createObjectURL(blob);
        }
    };

    const calcHp = () => {
        return (
            character.clazz.hd.faces +
            modraw(character.abilities.con.score) +
            ((character.level - 1) *
                (Math.ceil(character.clazz.hd.faces / 2) + 1) +
                modraw(character.abilities.con.score))
        );
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
            download={character.name + ".csv"}
            href={dl}
            title="download"><i class="las la-lg la-cloud-download-alt" /></a
        >
    </p>
    <hr />
    <div>
        <h2>
            Abilities <button
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
        <div>
            Estimated Max HP: {calcHp()}
            <i
                class="las la-info-circle cursor-help"
                title="hitdie + con + ((level - 1) × (ceil(hitdie / 2) + 1) + con)"
            />
        </div>
        <div>
            Hit Dice: {character.level}d{character.clazz.hd.faces}
            <i class="las la-info-circle cursor-help" title="based on class" />
        </div>
        <div>
            Proficiency Bonus: +{proficiencyBonus}
            <i
                class="las la-info-circle cursor-help"
                title="floor(level / 5) + 2"
            />
        </div>
        {#if character.clazz.spellcastingAbility != null}
            <div>
                Spell Save DC: {8 +
                    modraw(
                        character.abilities[character.clazz.spellcastingAbility]
                            .score
                    ) +
                    proficiencyBonus}
                <i
                    class="las la-info-circle cursor-help"
                    title="8 + casting modifier + proficiency"
                />
            </div>
        {/if}
    </div>
    <hr />
    <div>
        <h2>
            Skills <button
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
