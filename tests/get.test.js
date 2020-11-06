import { expect } from '@jest/globals'
import { fail } from 'assert'
import get from './../src/get'


describe("get", () => {
    test("no field", () => {
        expect(get({ 'a': 0 }, 'a.b')).toEqual(undefined)
    })
    test("valid", () => {
        const object = { 'a': { 'b': 1 } }
        expect(get(object, 'a.b')).toEqual(1)

    })
})