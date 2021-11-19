const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('', '', '', '')
    

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(employee.email).toBe('');
    expect(employee.role).toBe('');
});
