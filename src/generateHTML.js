const managerCard = function (manager) {
    return `
    <div class="col-3 mt-3">
    <div class="card h-100">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </div>    
    </div>

    <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="officeNum">Office Number: ${manager.officeNumber}</p>
    </div>
</div>
    `;
}

const engineerCard = function (engineer) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>    
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: ${engineer.github}</p>
        </div>
    </div>
    `;
}

const internCard = function (intern) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>    
        </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
    `;
};

generateHTML = (data) => {

    cardArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const generateManagerCard = managerCard(employee);

            cardArr.push(generateManagerCard);
        }

        if (role === 'Engineer') {
            const generateEngineerCard = engineerCard(employee);

            cardArr.push(generateEngineerCard);
        }

        if (role === 'Intern') {
            const generateInternCard = internCard(employee);

            cardArr.push(generateInternCard);
        }
    }

    const employeeCards = cardArr.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>

</head>
<body>
    <div class="container>
        <div class="row">
            ${employeeCards}
        </div>
    </div>


</body>

</html>
    `
}

module.exports = generateHTML;