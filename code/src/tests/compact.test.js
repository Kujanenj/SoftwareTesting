import compact from './../compact'

describe("compact", () => {
  test("large item", () => {
    expect(compact([0, 1, false, 2, '', 3])).toContain([1, 2, 3])
  })
})