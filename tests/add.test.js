import add from './../src/add';

describe("Add", () => {
    test("only positive numbers", () => {
        expect(add(5, 2)).toBe(7)
    })

    test("negative and positive numbers", () => {
        expect(add(-5, 6)).toBe(1)
    })

    //
    test("only negative numbers", () => {
        expect(add(-5, -6)).toBe(-11)
    })

    test("zeros", () => {
        expect(add(0, 0)).toBe(0)
    })
    //
})