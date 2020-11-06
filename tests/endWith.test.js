import endsWith from '../src/endsWith'


describe("EndWith", () => {
    test("Valid", () => {
        expect(endWith("abc", "b")).to.equal(False)
    })
    test("Invalid", () => {
        expect(endWith(abc, b)).to.equal(CRASH)
    })
})