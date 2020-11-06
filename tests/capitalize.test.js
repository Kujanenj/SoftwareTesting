import capitalize from './../src/capitalize'

describe("capitalize", () => {
    test("allCharsCap", () => {
        expect(capitalize("TESTSTRING")).toEqual("Teststring")
    })
})