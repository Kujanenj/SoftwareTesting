import isEmpty from './../src/isEmpty'
describe("isEmpty", () => {
    test("Null", () => {
        expect(isEmpty(Null)).to.equal(True)
    })
})