const Employee  = require('../lib/employee');

test('new employee object', () => {
    const employee = new Employee('Austin', 4104 , 'hargis32@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('check employee name', () => {
    const employee = new Employee('Austin', 4104 , 'hargis32@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('check employee id', () => {
    const employee = new Employee('Austin', 4104 , 'hargis32@gmail.com');

    expect(employee.id).toEqual(expect.any(Number));
    
});

test('check employee email', () => {
    const employee = new Employee('Austin', 4104 , 'hargis32@gmail.com');

    expect(employee.email).toEqual(expect.any(String));
});

test('check employee role', () => {
    const employee = new Employee('Austin', 4104 , 'hargis32@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
    
});