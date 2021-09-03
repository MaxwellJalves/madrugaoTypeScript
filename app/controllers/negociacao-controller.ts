import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {

    private _inputUsuario: HTMLInputElement
    private _inputTipoAtendimento: HTMLInputElement
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement


    constructor() {
        this._inputTipoAtendimento = document.querySelector('#tipoAtendimento')
        this._inputUsuario = document.querySelector('#usuario')
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }


    adicionar(): void {
        const { nome, data, quantidade, valor, tipoAtendimento, volume } = this.registar()
        alert(`\n
        Usuario : ${nome}    Serviço : ${tipoAtendimento} 
        Data do registro : ${data.getDate()}/ ${data.getMonth() + 1}/ ${data.getFullYear()} 
        Quantidade : ${quantidade} 
        valor      : ${valor} 
        Total R$    ${volume} `);
    }

    registar(): Negociacao {
        const regex = /-/g
        const negociacao = new Negociacao(
            this._inputUsuario.value,
            this._inputTipoAtendimento.value,
            new Date(this._inputData.value.replace(regex, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value))
        return negociacao;
    }

}
