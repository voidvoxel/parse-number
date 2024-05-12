import parseNumber from "./parseNumber.mjs";


test(
    "parse integers",
    () => {
        expect(parseNumber("0")).toBe(0);
        expect(parseNumber("1")).toBe(1);
        expect(parseNumber("69")).toBe(69);
        expect(parseNumber("-100")).toBe(-100);
        expect(parseNumber("42")).toBe(42);
    }
);


test(
    "parse decimals",
    () => {
        expect(parseNumber("0.5")).toBe(0.5);
        expect(parseNumber("-1.4")).toBe(-1.4);
        expect(parseNumber("6.9")).toBe(6.9);
        expect(parseNumber("42.0")).toBe(42.0);

        let value = parseNumber("12.3456789");

        expect(value).toBeGreaterThan(12.34);
        expect(value).toBeLessThan(12.35);
    }
);


test(
    "parse integer percentages",
    () => {
        let value = parseNumber("42%");

        expect(value).toBeGreaterThan(0.41);
        expect(value).toBeLessThan(0.43);
    }
);


test(
    "parse decimal percentages",
    () => {
        let value = parseNumber("12.3456789%");

        expect(value).toBeGreaterThan(0.1234);
        expect(value).toBeLessThan(0.1235);
    }
);
