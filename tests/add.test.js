import add from './../src/add';

describe("Add", () => {
    test("Positive numbers", () => {
        expect(add(5, 2)).toBe(7)
    })
    test("Negative numbers", () => {
        expect(add(-5, 6)).toBe(1)
    })
})