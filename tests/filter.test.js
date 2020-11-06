import filter from '../src/filter'

describe("Filter", () => {
    test("invalid product numbers", () => {
        let products = [1, 2, 3, 4, 5, -6, 7];
        expect(filter(products, (x) => x > -1)).toEqual([1, 2, 3, 4, 5, 7])
    })

    //
    test("sold products", () => {
        let products = [
            { 'product': 'dogfood', 'unsold': true },
            { 'product': 'catfood', 'unsold': false }
        ]
        expect(filter(products, ({ unsold }) => unsold)).toEqual([{ product: 'dogfood', unsold: true }])
    })

    test("invalid product numbers", () => {
        let products = [1, 2, 3, 4, 5, -6, 7];
        expect(filter(products, (x) => x > -1)).toEqual([1, 2, 3, 4, 5, 7])
    })
    //
})