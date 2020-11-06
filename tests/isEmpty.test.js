import isEmpty from './../src/isEmpty'
describe("isEmpty", () => {
    test("Null", () => {
        expect(isEmpty(null)).toEqual(true)
    })
})