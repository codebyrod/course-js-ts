// Formulário de Cadastro

// 1. Vamos construir a classe
class ValidaFormulario {
    // 2. chamar o constructor
    constructor() {
        // 5. vamos acessar a classe formulario na propriedade
        this.formulario = document.querySelector('.formulario');

        // 3. de cara já precisamos invocar os eventos
        this.events();
    }

    events() {
        // 6. Vamos capturar o evento de submit. Vamos usar uma arrow function para não perdemos o this da instância da classe
        this.formulario.addEventListener('submit', e => {
            // 6.1 prevenindo o formulário
            this.handleSubmit(e);
        });
    }

    // 7. evento de submit
    handleSubmit(e) {

        // 7.1 previne o envio
        e.preventDefault();

        // 7.2 essas const serão usadas para comparar futuramente todas as validações
        const camposValidos = this.isValid();
        const senhasValidas = this.passwordIsValid();


        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    passwordIsValid() {
        let valid = true;

        const senha = this.formulario.querySelector('.ipt-senha');
        const repetirSenha = this.formulario.querySelector('.ipt-rep-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa conter entre 6 e 12 caracteres')
        }

        return valid;
    }

    // 8. Método de validação
    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        //8.2 construindo um for para validação dos dados de cada input
        for (let campo of this.formulario.querySelectorAll('.validar')) {

            // 9.3 criando uma const que vai receber a label do input
            const label = campo.previousElementSibling.innerText;

            // 8.2.2 verificando campos que estão vazios e usando um método para retornar uma mensagem de erro
            if(!campo.value){
                // 9. criando um método de erro
                // 9.4 vamos setar a const label no argumento da função
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            // 10.1 VALIDANDO O CPF
            if(campo.classList.contains('ipt-cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            // 11. Valida Usuário
            if(campo.classList.contains('ipt-usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        // 12. se eles passar por todos esses ifs, então deu tudo certo
        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    // 10. Vamos criar um método onde usaremos nossa classe
    validaCPF(campo) {
        // 10.2 criando uma instância da classe validaCPF
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
        }
        return true;
    }

    // 9. Método de erro
    criaErro(campo, msg) {

        // 9.1 criando uma div com uma classe e inserindo a msg do parâmetro dentro da div
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        // 9.2 campo aqui representa cada input. Aqui estamos inserindo a div depois do campo
        campo.insertAdjacentElement('afterend', div);
    }

}

// 4. instanciando nossa classe
const valida = new ValidaFormulario();