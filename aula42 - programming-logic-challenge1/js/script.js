// Escreva uma função que recebe 2 números e retorne o maior deles

function higherNumer(x, y) {
    if (x > y){
        console.log(`${x} é maior que ${y}`)
        return x;
    }
    
    if (y > x){
        console.log(`${y} é maior que ${x}`)
        return y;
    }
}

higherNumer(10, 500)