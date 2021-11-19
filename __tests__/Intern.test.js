const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Dave Newport', '1', 'daven@example.com', 'Neumont School of Computer Science');

    expect(intern.name).toBe('Dave Newport');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('daven@example.com');
    expect(intern.school).toBe('Neumont School of Computer Science');
    expect(intern.role).toBe('Intern');
});
