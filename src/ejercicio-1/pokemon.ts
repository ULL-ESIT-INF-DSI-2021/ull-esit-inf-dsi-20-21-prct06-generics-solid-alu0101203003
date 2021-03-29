import {Fighter} from "./fighter";

export class Pokemon extends Fighter {
    constructor (nombre :string, peso :number, altura :number, phrase :string, estadisticas :number[], private tipo :string){
        super(nombre,peso,altura,phrase,estadisticas)
    }

    /**
     * Funcion getTipo
     * @returns tipo
     */
     public getTipo(){
        return this.tipo
    }

    /**
     * Funcion setTipo
     * @param tipo tipo a asignar
     */
    public setTipo(tipo :string){
        this.tipo = tipo
    }
}