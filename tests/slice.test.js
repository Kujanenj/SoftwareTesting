import slice from './../src/slice'

describe("Slice", () => {
  test("end of the array", () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4])
  })

  //
  test("between of the array", () => {
    expect(slice([1, 2, 3, 4, 5, 6], 1, 5)).toEqual([2, 3, 4, 5])
  })
  //
})