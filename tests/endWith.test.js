import endsWith from '../src/endsWith'


describe("EndsWith", () => {
    test("Valid", () => {
        expect(endsWith("abc", "c")).toEqual(true)
    })
    test("Invalid", () => {
        expect(endsWith('abc', 'b')).toEqual(false)
    })
})