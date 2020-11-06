import map from '../src/map'
import capitalize from '../src/capitalize'

// map([4, 8], square) -> [16, 64]

describe("Map", () => {
  test("capitalize multiple products", () => {
    expect(map(["product1", "product2"], capitalize)).toEqual(["Product1", "Product2"])
  })
})