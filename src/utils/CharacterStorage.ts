import * as localforage from "localforage";

import type { Character } from "../types";

localforage.config({ name: "q5es.sv#1.0.0" });

export class CharacterStorage {
    private idlist: string[] = [];

    async get(name?: string): Promise<Character> {
        if (name == null) {
            const lastsaved = await localforage.getItem<string>("last");
            return await localforage.getItem<Character>(lastsaved);
        } else {
            return localforage.getItem<Character>(name);
        }
    }

    async list(refresh = false): Promise<string[]> {
        if (this.idlist.length === 0 || refresh) {
            const list = (await localforage.getItem<string[]>("idlist")) ?? [];
            this.idlist = list;
            return list;
        }
        return this.idlist;
    }

    set(Character: Character): Promise<Character> {
        const { name } = Character;
        if (!this.idlist.includes(name)) {
            this.idlist.push(name);
            localforage.setItem("idlist", this.idlist);
        }
        localforage.setItem("last", Character.name);
        return localforage.setItem(name, Character);
    }

    async delete(id: string) {
        await localforage.removeItem(id);
        this.idlist = this.idlist.filter((i) => i !== id);
        return localforage.setItem("idlist", this.idlist);
    }

    export(character: Character) {
        throw Error("Export not yet implemented.");
    }

    import() {
        throw Error("Import not yet implemented.");
    }
}
