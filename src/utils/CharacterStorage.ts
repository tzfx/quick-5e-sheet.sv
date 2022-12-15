import * as localforage from "localforage";

import { Skills } from "../types";
import type { Character } from "../types"

localforage.config({ name: "q5es.sv#1.0.0" });

export class CharacterStorage {
    private idlist: string[] = [];

    async get(name?: string): Promise<Character> {
        return (
            name == null
                ? localforage
                      .getItem<string>("last")
                      .then((last) =>
                          last == null
                              ? null
                              : localforage.getItem<Character>(last)
                      )
                : localforage.getItem<Character>(name)
        ).then((c) => this.hydrate(c));
    }

    async list(refresh = false): Promise<string[]> {
        if (this.idlist.length === 0 || refresh) {
            const list = (await localforage.getItem<string[]>("idlist")) ?? [];
            this.idlist = list;
            return list;
        }
        return this.idlist;
    }

    set(character: Character): Promise<Character> {
        const { name } = character;
        if (!this.idlist.includes(name)) {
            this.idlist.push(name);
            localforage.setItem("idlist", this.idlist);
        }
        localforage.setItem("last", character.name);
        return localforage.setItem(name, character);
    }

    async delete(id: string) {
        await localforage.removeItem(id);
        this.idlist = this.idlist.filter((i) => i !== id);
        return localforage.setItem("idlist", this.idlist);
    }

    hydrate(character?: Character): Character {
        return character != null
            ? {
                  ...character,
                  skills: new Skills(character.skills),
              }
            : null;
    }

    export(character: Character) {
        const output = new Blob([JSON.stringify(character)], {
            type: "application/json",
        });
        document.location = URL.createObjectURL(output);
    }

    import() {
        throw Error("Import not yet implemented.");
    }
}
