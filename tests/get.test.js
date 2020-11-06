import get from './../src/get'

describe("Get", () => {
    let testObject;
    beforeEach(() => {
        testObject = { 'a': { 'b': 1 } }
    });

    test("when there is no field", () => {
        expect(get({ 'a': 0 }, 'a.b')).toEqual(undefined)
    })

    test("when there is valid test object", () => {
        expect(get(testObject, 'a.b')).toEqual(1)
    })

    //
    test("when there is valid test object but the path is wrong", () => {
        expect(get(testObject, 'a.b')).not.toEqual(2)
    })
    //
})