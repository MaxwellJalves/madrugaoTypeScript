export class Negociacoes {
    constructor() {
        this.registros = [];
    }
    adicionar(negociacao) {
        this.registros.push(negociacao);
    }
    remover() {
        this.registros.pop();
    }
    imprimir() {
        for (let nome of this.registros) {
            console.log(nome);
        }
    }
}
