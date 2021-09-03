import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const executar = document.querySelector('.form');
executar.addEventListener('submit', evento => {
    evento.defaultPrevented;
    controller.adicionar();
});
console.log(executar);
