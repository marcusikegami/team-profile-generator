const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Dave Newport', '1', 'daven@example.com', '16');

    expect(manager.name).toBe('Dave Newport');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('daven@example.com');
    expect(manager.officeNum).toBe('16');
    expect(manager.role).toBe('Manager');
});
