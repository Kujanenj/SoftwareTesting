import isEmpty from './../src/isEmpty'

describe("isEmpty", () => {
    test("when value is null", () => {
        expect(isEmpty(null)).toEqual(true)
    })

    //
    test("when value is array", () => {
        expect(isEmpty([1, 2, 3])).toEqual(false)
    })

    test("when value is object", () => {
        expect(isEmpty({'a' : 1})).toEqual(false)
    })

    test("when value is number", () => {
        expect(isEmpty(1)).toEqual(true)
    })
    //
})