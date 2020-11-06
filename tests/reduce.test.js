import reduce from '../src/reduce'
import add from '../src/add'
import compact from '../src/compact'
import { expect } from '@jest/globals'
describe("reduce", () => {
    test("Sum array", () => {
        expect(reduce([1, 2, 3], add, 0)).toEqual(6)
    })
    test("sum bad array", () => {
        expect(reduce(compact([1, 2, 3, ""], add(), 0))).toEqual(5)
    })
})