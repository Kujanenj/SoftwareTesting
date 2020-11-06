import map from '../src/map'
import capitalize from '../src/capitalize'
import { test } from '@jest/globals'
import compact from '../src/compact'
import isEmpty from '../src/isEmpty'

// map([4, 8], square) -> [16, 64]

describe("Map", () => {
    test("capitalize multiple products", () => {
        expect(map(["product1", "product2"], capitalize)).toEqual(["Product1", "Product2"])
    })
    test("Falsy list compact", () => {
        expect(
                compact(
                    map(
                        [1, 2, 3, 4], isEmpty)))
            .toEqual([2, 3, 4])
    })
})