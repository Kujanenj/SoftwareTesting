import map from '../src/map'
import capitalize from '../src/capitalize'

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
  //
})