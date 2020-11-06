import capitalize from './../capitalize'

describe("capitalize", () => {
  test("allCharsCap", () => {
    expect(capitalize("TESTSTRING")).toEqual("Teststring")
  })
})