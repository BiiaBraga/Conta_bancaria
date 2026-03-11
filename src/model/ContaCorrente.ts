/**
 * Autora: Beatriz Braga Silva
 * Data: 11/03
 */

//importações
import {Conta} from "./Conta"

//sub classe ContaCorrente
export class ContaCorrente extends Conta {
    
    //atributos
    private _limite: number;

    //construtor
    constructor(numero: number, agencia: number, tipo:number, titular: string, saldo: number, limite: number){
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    //get
    public get limite(){
        return this._limite;
    }

    //set
    public set limita(limite:number){
        this._limite = limite;
    }

    //metodo sacar
     public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }

    //metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }

}