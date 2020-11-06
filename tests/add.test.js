import { expect, test } from '@jest/globals';
import toNumber from '../src/toNumber';
import add from './../src/add';
describe("Add", () => {
    test("Positive numbers", () => {
        expect(add(5, 2)).toBe(7)
    })
    test("Negative numbers", () => {
        expect(add(-5, 6)).toBe(1)
    })
    test("Add strings using toString", () => {
        expect(add(toNumber('2'), toNumber('5'))).toEqual(7)
    })
})