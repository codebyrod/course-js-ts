//Transformando calculadora de Factory Functions para Construtor Functions

function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
    };

    this.capturaClique = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.equalTo();
        });
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            //keyCode está depreciado
            if(e.code === 'Enter' || e.code === 'NumpadEnter') this.equalTo();
        });
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.equalTo = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) alert('Conta Inválida');
            this.display.value = conta;
        } catch (e) {
            alert('Conta Inválida');
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
