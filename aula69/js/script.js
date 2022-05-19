// FILTER, MAP, REDUCE
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

// RETORNE A SOMA DO DOBRO DE TODOS OS PARES
const num1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15 , 22, 27];

//Filtrar só os números pares
const numerosPares = num1
    .filter(vlr => vlr % 2 === 0)
    .map(vlr => vlr * 2)
    .reduce((ac, vlr) => ac + vlr);
    
    // [ 50, 80, 2, 8, 22 ] - Filtro numeros pares.
    // [ 100, 160, 4, 16, 44 ] - Dobro
    // 324

console.log(numerosPares); //324




