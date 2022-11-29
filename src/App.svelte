<script lang="ts">
    import Sheet from "./Sheet.svelte";
    import { randomClass } from "./srd/classes";
    import { AbilityScores, Character, Skills } from "./types";
    import { CharacterStorage } from "./utils/CharacterStorage";

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
            target="_blank"
            rel="noreferrer">made with 🧙 by tzfx</a
        >
    </div>
    <h1
        class="text-orange-500 cursor-default uppercase text-xl font-light my-5"
    >
        Q5ES.sv
    </h1>
    <div class="flex flex-row-reverse">
        <button
            class="w-fit h-min p-2 text-sm mb-2 text-slate-500 border-2"
            on:click={() => (showSelect = !showSelect)}
        >
            <i
                class={`las la-chevron-circle-${
                    !showSelect ? "left" : "right"
                }`}
            />
            saved characters ({idlist.length})
        </button>
        {#await loading then _}
            {#if showSelect}
                {#each idlist as id}
                    <button
                        class="w-fit mr-2 h-min p-2 text-sm mb-2 text-slate-500 border-2 cursor-pointer"
                        on:click={() => (loading = load(id))}
                    >
                        {id}
                    </button>
                    <button
                        class="text-red-500 border-1 cursor-pointer border-red-500 h-min align-middle"
                        on:click={async () => {
                            await remove(id);
                            idlist = idlist.filter((i) => i !== id);
                        }}
                    >
                        <i class="las la-trash-alt" />
                    </button>
                {/each}
            {/if}
        {/await}
    </div>
    {#await loading then character}
        <Sheet {save} {character} />
    {/await}
</main>
