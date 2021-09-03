export class Negociacao {
    private _nome: string
    private _tipoAtendimento: string
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(nome: string, tipoAtendimento: string, data: Date, quantidade: number, valor: number) {
        this._nome = nome
        this._tipoAtendimento = tipoAtendimento
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get nome(): string {
        return this._nome
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get tipoAtendimento(): String {
        return this._tipoAtendimento.toUpperCase()
    }

    adicionar() {

    }

}