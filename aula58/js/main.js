function calculadoraFactory() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            //alert('Oi, estou aqui.')
            this.toCalc();
        },

        clearInput(display){
            display.value = '';
        },

        del(display){
            display.value = display.value.slice(0, -1);
        },

        equalTo(display){
        
            try {
                let conta = eval(display.value);

                if(!conta){
                    alert('Digite uma conta válida');
                    return;
                }
                
                display.value = conta;
                
            } catch (error) {
                
            }
            
        },

        operations(display, el){
            
            const valor1 = this.display.value
            


            console.log(valor1);
            
            document.addEventListener('click', e => {
                if(e.target.classList.contains('btn-num')){
                    this.capturaNum();
                }
            })
            
            


        },

        capturaNum(display, el){
            display.value = '';
            display.value += el.innerText;
            
            document.addEventListener('click', e => {
                if(e.target.classList.contains('btn-op')){
                    this.operations(display, el);
                }

                
            })


            
        },

        toCalc(){
            document.addEventListener('click', e => {
                const el = e.target;
                const boxInput = this.display;
                
                /* if(el.classList.contains('btn-num')){
                    boxInput.value += el.innerText;
                    //console.log(boxInput);
                    //boxInput += el.innerText;
                    this.operations()
                    /* function teste(e) {

                    } */
                    /* return {
                        novoValor: boxInput.value,
                        limpa: boxInput.value = '',

                    }
                } */

                if(el.classList.contains('btn-num')){
                    this.capturaNum(boxInput, el);
                }
                
                if(el.classList.contains('btn-clear')){
                    this.clearInput(boxInput);
                }

                /* if(el.classList.contains('btn-op')){
                    this.operations(boxInput, el)
                } */

                if(el.classList.contains('btn-del')){
                    this.del(boxInput);
                }

                if(el.classList.contains('btn-eq')){
                    this.equalTo(boxInput);
                }

                //const boxInput = this.display.value //Dá erro pq o value precisa que a const seja redeclarada constantemente
                
                //Eu não sabia que podiamos atribuir um valor como nessa forma abaixo
                //const teste = this.display.value = 'Olá';

            })
        }
    }
}

const calculadora = calculadoraFactory();
calculadora.inicia();