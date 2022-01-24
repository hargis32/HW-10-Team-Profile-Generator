const Intern = require('../lib/intern');

test('new intern object', () => {
    const intern = new Intern('Austin', 4200 , 'hargis32@gmail.com', 'SMU')

    expect(intern.school).toEqual(expect.any(String));
});

test('check intern school', () => {
    const intern = new Intern('Austin', 4200 , 'hargis32@gmail.com', 'SMU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('check intern role', () => {
    const intern = new Intern('Austin', 4200 , 'hargis32@gmail.com', 'SMU')

    expect(intern.getRole()).toEqual('Intern');
});