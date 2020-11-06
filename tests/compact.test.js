import compact from '../src/compact'

describe("compact", () => {
    test("large item", () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
    })
})