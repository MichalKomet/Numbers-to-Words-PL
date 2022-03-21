const toNumber = require('../app');

test('It should translate one digit number', () => {
	expect(toNumber(2)).toBe('dwa')
	expect(toNumber(5)).toBe('pięć')
})

test('It should translate to digit number', () => {
	expect(toNumber(11)).toBe('jedenaście')
})
