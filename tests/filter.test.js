import { expect, test } from '@jest/globals';
import endsWith from '../src/endsWith';
import filter from '../src/filter'

describe("Filter", () => {
    let users;
    beforeEach(() => {
        users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
    })

    test("users", () => {
        expect(filter(users, ({ active }) => active)).toEqual([{ user: 'barney', active: true }])
    })

    test("invalid product numbers", () => {
        let products = [1, 2, 3, 4, 5, -6, 7];
        expect(filter(products, (x) => x > -1)).toEqual([1, 2, 3, 4, 5, 7])
    })
    test("ending with filter", () => {
        expect(
                filter(
                    ["ab", "ac", "bb"], (string) => endsWith(string, 'b')))
            .toEqual(["ab", "bb"])
    })
})