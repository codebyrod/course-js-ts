let umaString = "Um \"texto\""; //barra invertida para escapar o caractere
let outraString = "Um texto";

console.log(umaString)
console.log(outraString[4])
console.log(outraString.charAt(3))
console.log(outraString.indexOf('texto'))
console.log(outraString.indexOf('o', 3)) //primeiro é o que devemos buscar
// e segundo é depois de qual indice?
console.log(outraString.lastIndexOf('o', 3)) //começa de tras pra frente
console.log("Aqui embaixo tá o match")
console.log(umaString.match(/[a-z]/g)); //
console.log(umaString.search(/x/)) //igual o indexof, mas a diferença é que ele aceita expressões regulares

//usando replace
let frase = "o rato roeu a roupa do rei de roma."
console.log(frase.replace("r", '#')) // o #ato roeu a roupa do rei de roma

console.log(frase.replace(/r/, '#')) // o #ato roeu a roupa do rei de roma
console.log(frase.replace(/r/g, '#')) // usando a flag g a gente substitui tudo
//o #ato #oeu a #oupa do #ei de #oma

//comprimento da string
console.log(frase.length)

//substituindo
console.log(frase.slice(-5, -1))
console.log(frase.slice(23, 26))
console.log(frase.split(' ')) //qubra o texto onde se quer e joga pra um array
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())