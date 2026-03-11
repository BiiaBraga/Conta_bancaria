/**
 * Autora: Beatriz Braga Silva
 * Data: 11/03
 */

//importações
import {Conta} from "./Conta"

//sub classe ContaPoupanca
export class ContaPoupanca extends Conta {
    
    //atributos
    private _aniversario: number;

    //construtor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    //get
    public get aniversario() {
        return this._aniversario;
    }

    //set
    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }

    //metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversário: " + this._aniversario);
    }
}