//Arquivo para praticar esse mesmo código, bem como para procurar outros modos de realizar a mesma função

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(this.cpfLimpo !== 11) return false;
    if(typeof(this.cpfLimpo) === 'undefined') return false;
    //if(isSequencia()) return false;

    const cpfParcial = cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('111.111.111-11');
console.log(cpf.valida());