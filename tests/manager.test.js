const Manager = require('../lib/manager');

test('new manager object', () => {
    const manager = new Manager('Austin', 4300, 'hargis32@gmail.com', 24);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('check manager role', () => {
    const manager = new Manager('Austin', 4300, 'hargis32@gmail.com', 24);

    expect(manager.getRole()).toEqual('Manager');
})