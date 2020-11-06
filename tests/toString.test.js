import toString from '../src/toString'
import get from '../src/get'
import slice from '../src/slice'

describe("toString", () => {
    test("when value is array", () => {
        expect(toString(["p1", "p2", "p3", "p4"])).toEqual("p1,p2,p3,p4")
    })

    //
    test("when value is negative zero", () => {
        expect(toString(-0)).toEqual("-0")
    })
    // INTEGRATION
    test("String: Slice of objects ", () => {
        expect(toString(
            get(
                slice(
                    [{ 'a': 1 }, { 'b': 2 }], 0, 1)[0], 'a')
        ))
            .toEqual('1')
    })
})