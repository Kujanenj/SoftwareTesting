import toNumber from '../src/toNumber'

describe("toNumber", () => {
    test("String to number", () => {
        expect(toNumber('3.2')).toEqual(3.2)
    })
})