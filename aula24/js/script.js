//ESTRUTURAS CONDICIONAIS

/* const hora = 10;

if (hora <= 12) {
    console.log('Bom dia');
} */

/* 
Entre 0 - 11 = 'Bom dia'
Entre 12 - 17 = 'Boa tarde'
Entre 18 - 23 = 'Boa tarde'
*/

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
   console.log('Boa tarde'); 
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else{
    console.log('Olá');
}

// IF pode ser usado sozinho
// ELSE - sempre que usar preciso de um if antes
// ELSE IF - podemos criar quantos else ifs quisermos
// só posso ter um ELSE por último na checagem
//Podemos usar condições sem elseif, utilizando apenas if e else

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
