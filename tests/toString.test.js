import toString from '../src/toString'

describe("toString", () => {
    test("when value is array", () => {
        expect(toString(["p1", "p2", "p3", "p4"])).toEqual("p1,p2,p3,p4")
    })

    //
    test("when value is negative zero", () => {
        expect(toString(-0)).toEqual("-0")
    })
    //
})