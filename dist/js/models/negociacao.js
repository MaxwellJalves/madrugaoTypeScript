export class Negociacao {
    constructor(nome, tipoAtendimento, data, quantidade, valor) {
        this._nome = nome;
        this._tipoAtendimento = tipoAtendimento;
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get nome() {
        return this._nome;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get tipoAtendimento() {
        return this._tipoAtendimento.toUpperCase();
    }
    adicionar() {
    }
}
