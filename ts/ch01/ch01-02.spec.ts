import * as fc from 'fast-check'

test('identity for addition holds', () => {
    fc.assert(
        fc.property(fc.integer(), n => {
            expect(0 + n).toEqual(n)
        })
    )
})

// multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));

test('identity for addition holds', () => {
    fc.assert(
        fc.property(fc.bigInt(), fc.bigInt(), fc.bigInt(), (x, y, z) => {
            expect(x * (y + z)).toEqual(x * y + x * z)
        })
    )
})
