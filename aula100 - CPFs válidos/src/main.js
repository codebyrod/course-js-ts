import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    
    const p = document.createElement('p');
    p.classList.add('cpf-text');
    cpfGerado.appendChild(p);
    
    p.innerHTML = gera.geraNovoCpf();
})();