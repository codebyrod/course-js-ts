/* function ePaisagem(largura, altura) {
    //return largura > altura ? true : false
    return largura > altura; 
    //retiramos o retorno do true ou false 
    //ele já vai retornar true ou false por padrão
}

console.log(ePaisagem(1920, 1080)); */

//USANDO ARROW FUNCTION
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1.920, 1080));
