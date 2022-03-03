const toNumber = require('../app')('PL');

test('It should translate one digit number', () => {
	expect(toNumber(5)).toBe('pięć')
})