// CONCATENANDO ARRAYS
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Array que vai receber os outros dois arrays

//forma errada
const arr3 = arr1 + arr2;
console.log(arr3); // 1,2,34,5,6
console.log(typeof arr3); // string

//forma certa
const arr4 = arr1.concat(arr2);
console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

//Concatenando mais valores
const arr5 = arr1.concat(arr2, [7, 8, 9], 'Rodrigo');
console.log(arr5); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Rodrigo' ]

//Usando SPREAD OPERATOR
const arr6 = [...arr1, ...arr2];
console.log(arr6); // [ 1, 2, 3, 4, 5, 6 ]

//Usando SPREAD OPERATOR com outros elementos
const arr7 = [...arr1, 'Abido', ...arr2, ...[20, 21, 22], 'Patricia']; //usando spread operator em array literal
console.log(arr7); // [ 1, 2, 3, 'Abido', 4, 5, 6, 20, 21, 22, 'Patricia' ]

// tudo que foi mostrado até aqui com array também vai funcionar com objetos