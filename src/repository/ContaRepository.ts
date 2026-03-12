/**
 * Autora: Beatriz Braga Silva
 * Data: 12/03
 */

//importações
import { Conta } from "../model/Conta";

//interface
export interface ContaRepository{

    //CRUD da conta
    procurarPorNumero(numero:number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //metodos bancarios
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}