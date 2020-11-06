import map from '../src/map'
import capitalize from '../src/capitalize'
import compact from '../src/compact'
import isEmpty from '../src/isEmpty'

describe("Map", () => {
  let products;
  beforeEach(() => {
    products = [
      {
        'name': 'chair',
        'price': 20
      },
      {
        'name': 'kalle',
        'price': 50
      }
    ]
  })
  test("to capitalize multiple products", () => {
    expect(map(["product1", "product2"], capitalize)).toEqual(["Product1", "Product2"])
  })

  //
  test("to increase multiple product prices", () => {
    expect(map(products, (product) => product.price * 2)).toEqual([40, 100])
  })

  test("to increase multiple product prices", () => {
    expect(map(products, (product) => capitalize(product.name))).toEqual(['Chair', 'Kalle'])
  })
  // INTEGRATION
  /*
  test("Falsy list compact", () => {
    expect(
      compact(
        map(
          [1, 2, 3, 4], isEmpty)))
      .toEqual([2, 3, 4])
  })
  */
})