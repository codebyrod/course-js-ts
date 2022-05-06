const numero = 10;

if (numero >= 0) {
    console.log('Sim, o número é maior ou igual a zero')    
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5')    
} else{
    console.log('O número NÃO está entre 0 e 5') 
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5')    
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8') 
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11') 
} else{
    console.log('O número NÃO está entre 0 e 11') 
}

//vai checar da esquerda p direita, de cima para baixo -> 
// Ao chegar em uma condição verdadeira, ela vai ser executada e todo o resto será ignorado, mesmo que haja alguma condição verdadeira

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5')    
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8') 
} else if (1 === 1) {
    console.log('LITERAL') //Essa linha vai ser executada e vai parar de executar o bloco IF-Else
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11') 
} else{
    console.log('O número NÃO está entre 0 e 11') 
}
