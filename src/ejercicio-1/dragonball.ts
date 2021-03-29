import {Fighter} from "./fighter";

export class Dragonball extends Fighter {
    constructor (nombre :string, peso :number, altura :number, phrase :string, estadisticas :number[], private raza :string){
        super(nombre,peso,altura,phrase,estadisticas)
    }

    /**
     * Funcion getRaza
     * @returns raza
     */
     public getRaza(){
        return this.raza
    }

    /**
     * Funcion setRaza
     * @param raza raza a asignar
     */
    public setRaza(raza :string){
        this.raza = raza
    }
}