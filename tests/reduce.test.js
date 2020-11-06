import reduce from '../src/reduce'
import add from '../src/add'
describe("reduce", () => {
    test("Sum array", () => {
        expect(reduce([1, 2, 3], add, 0)).toEqual(6)
    })
})