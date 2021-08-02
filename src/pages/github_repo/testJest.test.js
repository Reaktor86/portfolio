const {sum} = require('./testJest');

test('sum', () => {
    expect(sum(4,5)).toBe(9)
})
