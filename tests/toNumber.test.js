import toNumber from '../src/toNumber'

describe("toNumber", () => {
    test("when value is string", () => {
        expect(toNumber('3.2')).toEqual(3.2)
    })

    //
    test("when value is infinity", () => {
        expect(toNumber(Infinity)).toEqual(Infinity)
    })

    test("when value is decimal", () => {
        expect(toNumber(500.2)).toEqual(500.2)
    })

    test("when value is negative integer", () => {
        expect(toNumber(-73)).toEqual(-73)
    })
    //
})