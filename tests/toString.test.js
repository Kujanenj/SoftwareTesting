import toString from '../src/toString'

describe("toString", () => {
    test("listToString", () => {
        expect(toString(["p1", "p2", "p3", "p4"])).toEqual("p1,p2,p3,p4")
    })
})