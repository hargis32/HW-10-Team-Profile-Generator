const Engineer = require('../lib/engineer');

test('new engineer object', () => {
    const engineer = new Engineer('Austin', 4100 , 'hargis32@gmail.com', 'hargis32');

    expect(engineer.github).toEqual(expect.any(String));
});

test('check engineer github', () => {
    const engineer = new Engineer('Austin', 4100 , 'hargis32@gmail.com', 'hargis32');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('check engineer role', () => {
    const engineer = new Engineer('Austin', 4100 , 'hargis32@gmail.com', 'hargis32');

    expect(engineer.getRole()).toEqual('Engineer');
});