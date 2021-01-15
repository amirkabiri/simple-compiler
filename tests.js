console.assert(calculator('1') === 1, '1 === 1')
console.assert(calculator('2') !== 1, '2 !== 1')
console.assert(calculator('1 + 2') === 3, '1 + 2 === 3')
console.assert(calculator('1 + 2 * 3') === 7, '1 + 2 * 3 === 7')
console.assert(calculator('1 * 2 + 3') === 5, '1 * 2 + 3 === 5')
console.assert(calculator(`(1 + 2) * 3 + 4`) === 13, '(1 + 2) * 3 + 4 === 13');
console.assert(calculator(`8 / 2 + (1 + 2) * 3 + 4`) === 17, '8 / 2 + (1 + 2) * 3 + 4 === 17');