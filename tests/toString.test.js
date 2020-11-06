import toString from '../src/toString'

describe("toString", () => {
    test("listToString", () => {
        expect(["p1", "p2", "p3", "p4"]).to.equal("p1p2p3p4")
    })
})