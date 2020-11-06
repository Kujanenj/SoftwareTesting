import reduce from '../src/reduce'

describe("reduce", () => {
    test("Sum array", () => {
        expect(reduce([1, 2, 3], add, 0)).to.equal(6)
    })
})