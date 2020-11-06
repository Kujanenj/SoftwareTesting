import capitalize from './../src/capitalize'

describe("Capitalize", () => {
    test("when all characters are capitalized", () => {
        expect(capitalize("TESTSTRING")).toEqual("Teststring")
    })

    //
    test("when first letter is number", () => {
        expect(capitalize("0123Test")).toEqual("0123test")
    })

    test("when first letter is character and others are numbers", () => {
        expect(capitalize("P1234567")).toEqual("P1234567")
    })

    test("when string contains other symbols", () => {
        expect(capitalize("J%/¤#")).toEqual("J%/¤#")
    })
    //
})