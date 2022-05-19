// FOREACH
// Mais uma forma de iterar sobre o array
// forEach só está disponível dentro de erro


const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// EXEMPLO COM FOR OR
for (let valor of arr1) {
    console.log(valor);
}

// EXEMPLO COM FOR EACH
//forEach só itera sobre o valor
// forEach também necessita de uma função de callback que pode receber três argumentos, valor, indice e o array completo, assim como map, reduce e filter

arr1.forEach(function(valor){
    console.log(valor);
})

// SIMULANDO UM REDUCE
let total = 0;
arr1.forEach(valor => {
    total += valor;
});
console.log(total); //450