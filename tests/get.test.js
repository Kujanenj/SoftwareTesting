import { expect } from '@jest/globals'
import { fail } from 'assert'
import get from './../src/get'


describe("get", () => {
    test("no field", () => {
        expect(get({ a }, 'a.b')).to.equal(null)
    })
    test("valid", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a.b')).to.equal(1)

    })
})