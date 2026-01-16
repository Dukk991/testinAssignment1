import { divide } from "../src/calc.js";

//pos
test("dividing two valid numbers", () => {
    expect(divide(2,1)).toBe(2);
});

//neg
test("error when dividing by zero", () => {
    expect(() => divide(2, 0).toThrow(RangeError));
});

test("error when first argument not valid", () => {
    expect(() => divide("a", 1)).toThrow(TypeError);
});

test("error when second argument not valid", () => {
    expect(() => divide(2, "b")).toThrow(TypeError);
});

test("error when both arguments invalid", () => {
    expect(() => divide("a", "b")).toThrow(TypeError);
});

/*
test("error when first argument is NaN", () => {
    expect(() => divide(NaN, 1)).toThrow(TypeError);
});

test("error when second argument is NaN", () => {
    expect(() => divide(2, NaN)).toThrow(TypeError);
});

test("error when both arguments are NaN", () => {
    expect(() => divide(NaN, NaN)).toThrow(TypeError);
});*/