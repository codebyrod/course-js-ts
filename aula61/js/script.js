//FUNÇÕES RECURSIVAS
//Funções recursivas são funções que chamam a elas mesmas
//Similar às estruturas de repetição while/for por exemplo

//Caso a gente use muita recursividade o motor do js vai parar em determinado ponto por acreditar que trata-se de um looping infinito. Então é importante a gente saber que há um limite.
function recursiva(max){
    
    console.log(max);
    
    //Estabelecemos um limite máximo para nossa funcão com um return caso atenda a nossa condição de limite máximo
    if(max >= 10) return;

    //As funções recursivas necessitam de um modificar, do contrário entrarão em looping infinito.
    max++;

    //Aqui estamos chamando a própria função
    recursiva(max);
}

recursiva(0);