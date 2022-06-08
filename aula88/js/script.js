// VALIDANDO CPF COM CLASSES
// 705.484.450-52
// 070.987.720-03

// ALGORITMO
// A. Receber um CPF
// B. Limpar caracteres que não sejam números e retornar "cpflimpo"
// C. Validar o cpflimpo, retornar falso caso seja vazio, caso não seja string, caso seja sequência, caso for diferente de 11 digitos.
// D. Separar os números dos dígitos finais para futura comparação
// E. Conta para retornar o primeiro digito
// F. Conta para retornar o segundo digito
// G. Concatenação dos numeros e dos digitos retornados
// H. Comparação dos cpfgerado com o cpflimpo, caso seja true é um cpf válido

// 1. Construindo uma classe
class ValidaCPF {
    // 2. Podemos usar tudo que usamos em constructor function em classes
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    // 5. Método que gera novo CPF
    geraNovoCpf() {
        // 5.1 separando o cpf dos dígitos finais
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        
        // 5.2 criando uma const que invoca a function geraDigito e passando para ela o cpf sem digitos como parâmetros
        /* const digito1 = this.geraDigito(cpfSemDigitos); */
        /* console.log('digito1', digito1); */

        // 12. Uma vez que tornamos o método static, temos que mudar a forma de acessar o método
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        
        // 5.3 criando uma const que invoca a function geraDigito e passando para ela o cpf sem digitos + o digito 1 como parâmetros
        /* const digito2 = this.geraDigito(cpfSemDigitos + digito1); */
        /* console.log('digito2', digito2); */

        // 13. Uma vez que tornamos o método static, temos que mudar a forma de acessar o método aqui também
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);

        // 5.3 criando propriedade do método chamado novoCPF
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
        /* console.log('geranovoCPF', this.novoCPF); */
    }

    // 6. Construindo a função cpfSemDigitos
    // 11. Tornando esse método static, uma vez que ele não usa dados da instância
    static geraDigito(cpfSemDigitos) {
        // 6.1 vamos transformar o cpfSemDigitos em um array, vamos usar um for clássico dessa vez
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        // 6.2 estamos usando stringNumerica para lembrarmos que os números aqui estão em formato de string
        for (let stringNumerica of cpfSemDigitos){
            // 6.2.2 verificando o tipo
            /* console.log(stringNumerica, typeof stringNumerica); */
            
            // 6.2.3 somando a multiplicação reversa com os valores do cpfSemDigitos
            total += reverso * Number(stringNumerica);

            // 6.2.4 verificando se tá tudo funcionando bem
            /* console.log(total, reverso, stringNumerica) */
            
            // 6.2.5 diminuindo o reverso;
            reverso--; 
        }
        // 6.3 verificando o total
        /* console.log('total', total, typeof total); */

        // 6.4 Construindo o digito. 11 menos o resto da divisão de total por 11.
        const digito = 11 - (total % 11);
        
        // 6.5 Verificando o valor do digito
        /* console.log('digito', digito, typeof digito) */

        // 6.6 Verifica se o digito da operação anterior é menor que 9. Se sim retorna o digito, se for maior que 9, retorna 0.
        return digito <= 9 ? String(digito) : '0';
    }

    // 4. Métodos para verificar se é uma sequência
    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    // 3. Construindo métodos de validação
    valida() {
        // 3.1 Caso não tenha nada retorna falso
        if(!this.cpfLimpo) return false;
        
        // 3.2 Caso não seja uma string retorna falso
        if(typeof this.cpfLimpo !== 'string') return false;
        // 3.3 Caso não tenha 11 caracteres retorna falso
        
        if(this.cpfLimpo.length !== 11) return false;
        // 3.4 Caso seja uma sequencia retorna falso
        
        if(this.isSequence()) return false;
        // 5.1 Chama o método de gerar novo cpf
        
        this.geraNovoCpf();

        /* console.log('this Novo CPF', this.novoCPF); */
        
        // 3.5 se chegou até aqui é pq foi validado
        /* return 'CHEGUEI AQUI' */

        // 3.6 Vamos um boolean de acordo com a verificação
        /* return this.novoCPF === this.cpfLimpo */

        // 9. Retornando cpf Válido ou Inválido
        return this.novoCPF === this.cpfLimpo ? 'CPF Válido' : 'CPF Inválido';
    }
}

const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida());

// 7. Fazendo uma verificação para retornar CPF Válido ou Inválido
// 8. coloquei esse if no retorno do valida()
/* if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido')
} */

// 10. Métodos estáticos. Desses métodos quais poderiam se tornar estáticos? Na função geraDigito() em momento nenhum usamos a palavra this. Ou seja, significa que não precisamos de nada da instância. Então ele pode se tornar static.