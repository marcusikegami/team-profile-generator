const fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path/posix');



function generatePage(employeeCards) {
    
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Site</title>
</head>
<body>
    <header>
        <h1 class="app-title">My Team</h1>
    </header>
    <main class="wrapper row align-items-center">
        ${employeeCards}
    </main>
</body>
</html>
`;

    fs.writeFile('./dist/index.html', html, err => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok:true,
            message: 'index.html created!'
        });
    });
};

function addEngineer(member) {
    const engineer = 
    `<div class="card">
        <h3 class="card-header text-uppercase">${member.name}</h3>
        <h3 class="card-header text-uppercase">Engineer</h3>
        <div class="card-body">
            <p>ID: ${member.id}</p>
            <p>Email: <a href="mailto:${memeber.email}>${member.email}<a></p>
            <p>GitHub: <a href="https://github.com/${member.github}>${member.github}</a></p>
        </div>
    </div>
    
    `;
    return engineer;
}

function addIntern(member) {
    const intern = 
    `<div class="card">
    <h3 class="card-header text-uppercase">${member.name}</h3>
    <h3 class="card-header text-uppercase">Intern</h3>
        <div class="card-body">
            <p>ID: ${member.id}</p>
            <p>Email: <a href="mailto:${memeber.email}>${member.email}<a></p>
            <p>School: ${member.school}</p>
        </div>
    </div>
    
    `;
    return intern;
}

function addManager(member) {
    console.log('endpoint reached');
const manager = 
`<div class="card">
    <h3 class="card-header text-uppercase">${member.name}</h3>
    <h3 class="card-header text-uppercase">Manager</h3>
    <div class="card-body">
        <p>ID: ${member.id}</p>
        <p>Email: <a href="mailto:${memeber.email}>${member.email}<a></p>
        <p>Office Number: ${member.officNum}</p>
    </div>
</div>

`;


return manager;
}
module.exports = {
    generatePage,
    addEngineer,
    addIntern,
    addManager,
}