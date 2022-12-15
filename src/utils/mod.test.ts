import {expect, describe, it} from "vitest";

import * as mod from "./mod";

describe("mod utilities", () => {
    it("should calculate the proper modifier for a given number", () => {
        expect(mod.modraw(10)).toBe(0);
        expect(mod.modraw(20)).toBe(5);
        expect(mod.modraw(8)).toBe(-1);
    });
    it("should display prefix a modifier with + or -", () => {
        expect(mod.mod(10)).toBe("0");
        expect(mod.mod(20)).toBe("+5");
        expect(mod.mod(8)).toBe("-1");
    });
    it("should calculate the correct proficiency bonus for a level", () => {
        expect(mod.proficiency(1)).toBe(2);
        expect(mod.proficiency(5)).toBe(3);
        expect(mod.proficiency(10)).toBe(4);
    })
})