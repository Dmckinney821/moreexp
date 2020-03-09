
const add = (a,b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should print hello with the name', () => {
    const result = generateGreeting('Dan')
    expect(result).toBe('Hello Dan!')
})

test('shoud generate greint for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello anonymous!')
})
