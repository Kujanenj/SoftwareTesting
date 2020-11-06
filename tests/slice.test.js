import slice from './../src/slice'

describe("slice",()=>{
  test("remove amount",()=>{
      expect(slice([1,2,3,4], 2)).toEqual([3,4])
  })
})