const { add, substract, multiply, divide } = require("../math");

// 1. Create test case to check add function works what it is supposed to be.
test('add 1 + 2 to equal 3',() => {
    expect(add(1,2)).toBe(3);
});
// 2. Create test case to check substract function works what it is supposed to be.
test('substract 3 - 1 to equal 2',() => {
    expect(substract(3, 1)).toBe(2);
});
// 3. Create test case to check multiply function works what it is supposed to be.
test('multiply 3 * 2 to equal 6',() => {
    expect(multiply(3, 2)).toBe(6);
});
// 4. Create test case to check divide function works what it is supposed to be.
test('divide 6 / 2 to equal 3',() => {
    expect(divide(6, 2)).toBe(3);
});

// 5. Create test case to check divide function returns "cannot divide something with 0"
// when it tries to divdie a number with zero.
test('divide 7 / 0 to equal cannot divide something with 0',() => {
    expect(divide(7, 0)).toBe('cannot divide something with 0');
});

// 6. Group tests using `describe()`

describe( 'math.js test',() => {
    test('add 1 + 2 to equal 3',() => {
        expect(add(1,2)).toBe(3);
    });
    test('substract 3 - 1 to equal 2',() => {
        expect(substract(3, 1)).toBe(2);
    });
    test('multiply 3 * 2 to equal 6',() => {
        expect(multiply(3, 2)).toBe(6);
    });
    test('divide 6 / 2 to equal 3',() => {
        expect(divide(6, 2)).toBe(3);
    });
    test('divide 7 / 0 to equal cannot divide something with 0',() => {
        expect(divide(7, 0)).toBe('cannot divide something with 0');
    });
});