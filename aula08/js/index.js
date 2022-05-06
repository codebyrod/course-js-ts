const firstName = 'Rodrigo';
const lastName = 'Sousa'
const age = 27;
const weight = 73;
const height = 1.80;
const currentYear = 2022
let bodyMassIndex; // peso / (altura * altura)
let yearBirth; // ano atual - idade

bodyMassIndex = weight / (height * height);
console.log(bodyMassIndex)

yearBirth = currentYear - age
console.log(yearBirth)

// passando por valores com vírgula
console.log(firstName, lastName, 'tem', age, 'anos de idade e pesa', weight, 'kg.');
console.log('tem', height, 'de altura e seu IMC é de', bodyMassIndex)
console.log(firstName, 'nasceu em', yearBirth)

//passando valores com template string
console.log(`${firstName} ${lastName} tem ${age} anos de idade e pesa ${weight}kg.`);
console.log(`tem ${height} de altura e seu IMC é de ${bodyMassIndex}`)
console.log(`${firstName} nasceu em ${yearBirth}`)

