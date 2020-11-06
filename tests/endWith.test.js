import endsWith from '../src/endsWith'


describe("Endswith", () => {
    test("valid character", () => {
        expect(endsWith("abc", "c")).toEqual(true)
    })

    test("invalid character", () => {
        expect(endsWith('abc', 'b')).toEqual(false)
    })

    //
    test("second to last character", () => {
        expect(endsWith('abc', 'b', 2)).toEqual(true)
    })
    //
})