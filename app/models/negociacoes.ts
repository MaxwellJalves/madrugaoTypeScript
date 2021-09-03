import { Negociacao } from "./negociacao"

export class Negociacoes {
    private registros: Array<Negociacao> = []

    adicionar(negociacao: Negociacao) {
        this.registros.push(negociacao)
    }

    remover() {
        this.registros.pop()
    }

    imprimir() {
        for (let nome of this.registros) {
            console.log(nome)
        }
    }
}