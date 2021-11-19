const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Dave Newport', '1', 'daven@example.com', 'davenewport');

    expect(engineer.name).toBe('Dave Newport');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('daven@example.com');
    expect(engineer.github).toBe('davenewport');
    expect(engineer.role).toBe('Engineer');
});