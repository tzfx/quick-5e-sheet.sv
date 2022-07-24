<script lang="ts">
    import { randomClass } from "./srd/classes";
    import { CharacterStorage } from "./utils/CharacterStorage";
    import { Character, AbilityScores, Skills } from "./types";
    import Sheet from "./Sheet.svelte";

    const storage: CharacterStorage = new CharacterStorage();
    let idlist: string[] = [];

    const init = async () => {
        idlist = await storage.list(true);
        return await load();
    };

    const load = async (id?: string) => {
        let character = await storage.get(id);
        if (character == null) {
            const clazz = randomClass();
            character = {
                clazz,
                name: null,
                level: 1,
                abilities: new AbilityScores(clazz),
                skills: new Skills(),
            };
        }
        return character;
    };

    const save = async (character: Character) => {
        await storage.set(character);
        idlist = await storage.list(true);
    };

    const remove = (id: string) => storage.delete(id);

    let loading = init();
    let showSelect = false;
</script>

<main class="md:max-w-5xl text-center p-4 mx-auto h-screen">
    <div>
        <a
            href="https://github.com/tzfx"
            class="text-xs right-4 top-2 absolute"
            target="_blank">made with 🧙 by tzfx</a
        >
    </div>
    <h1
        class="text-orange-500 cursor-default uppercase text-xl font-light my-5"
    >
        Q5ES.sv
    </h1>
    <div class="flex flex-row-reverse">
        <p
            class="w-fit h-min p-2 text-sm mb-2 text-slate-500 border-2 cursor-pointer"
            on:click={() => (showSelect = !showSelect)}
        >
            <i
                class={`las la-chevron-circle-${
                    !showSelect ? "left" : "right"
                }`}
            />
            saved characters ({idlist.length})
        </p>
        {#await loading then _}
            {#if showSelect}
                {#each idlist as id}
                    <p
                        class="w-fit mr-2 h-min p-2 text-sm mb-2 text-slate-500 border-2 cursor-pointer"
                        on:click={() => (loading = load(id))}
                    >
                        {id}
                    </p>
                    <p
                        class="text-red-500 border-1 cursor-pointer border-red-500 h-min align-middle"
                        on:click={async () => {
                            await remove(id);
                            idlist = idlist.filter((i) => i !== id);
                        }}
                    >
                        <i class="las la-trash-alt" />
                    </p>
                {/each}
            {/if}
        {/await}
    </div>
    {#await loading then character}
        <Sheet {save} {character} />
    {/await}
</main>
