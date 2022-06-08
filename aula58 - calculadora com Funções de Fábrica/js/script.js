function criaCalculadora() {
    return {
        //REGRAS
        //atributos para cima e métodos para baixo
        
        display: document.querySelector('.display'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },
        
        clearDisplay(){
            //console.log(this.display.value)
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                //Se a conta tiver valor falso, tipo zero
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        del(){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            //Aqui dentro dessa função o this = calculadora
            /* document.addEventListener('click', function(e) {
                //Aqui dentro o this = document, pq está dentro de outra função
                const el = e.target;
                console.log(this); //#document
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                //Isso é o comportamente desejável. Quem chamou que é o this.
                //Queremos que o this seja nossa calculadora, o que fazemos? As funções tem métodos imbutidos dentro delas. Um desses métodos é o bind();
            
            //O que estamos dizendo nessa linha abaixo é para usarmos o this da calculadora.
            }.bind(this)); */

            //USANDO ARROW FUNCTIONS
            //Arrow Functions não afetam o comportamento do this.
            document.addEventListener('click', (e) => {
                const el = e.target;
                //console.log(this);

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.del()
                }

                if(el.classList.contains('btn-eq')){
                    //EVAL - USO POTENCIALMENTE PERIGOSO
                    //eval permite que um valor passado para dentro desse método seja executado como js. Então é uma grande vulnerabilidade.
                    this.realizaConta();
                }
            })

        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();