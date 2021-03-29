import {Fighter} from "./fighter";

/**
 * Clase Dragonball
 * Representa a los luchadores del universo Dragon Ball
 * Hereda de la clase Fighter
 */
export class Dragonball extends Fighter {
    /**
     * Constructor
     * @param nombre nombre del luchador (heredado de Fighter)
     * @param peso peso del luchador (heredado de Fighter)
     * @param altura altura del luchador (heredada de Fighter)
     * @param phrase catching phrase del luchador (heredada de Fighter)
     * @param estadisticas estadisticas asignables al atributo "EstadisticasBasicas" del luchador (heredadas de Fighter)
     * @param raza raza del luchador (saiyan, humano, namekiano...)
     */
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