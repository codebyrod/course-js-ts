// Escreva uma função chamada ePaisagem que recebe dois argumentos, 
// largura e altura de uma imagem (number)
// Retorna true se a imagem estiver no modo paisagem

// altura > largura ? retrato : paisagem


const ePaisagem = (height, width) => height > width ? 'Modo Retrato' : 'Modo Paisagem';
console.log(ePaisagem(1200, 500));
console.log(ePaisagem(800, 800));
console.log(ePaisagem(1200, 1201));
console.log(ePaisagem(501, 500));
console.log(ePaisagem(0, '500'));
console.log(ePaisagem('299', '300'));
console.log(ePaisagem(undefined, NaN));

