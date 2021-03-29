import {Fighter} from "./fighter";

/**
 * Clase Pokemon
 * Representa a los luchadores del universo Pokemon
 * Hereda de la clase Fighter
 */
export class Pokemon extends Fighter {
    /**
     * Constructor
     * @param nombre nombre del luchador (heredado de Fighter)
     * @param peso peso del luchador (heredado de Fighter)
     * @param altura altura del luchador (heredada de Fighter)
     * @param phrase catching phrase del luchador (heredada de Fighter)
     * @param estadisticas estadisticas asignables al atributo "EstadisticasBasicas" del luchador (heredadas de Fighter)
     * @param tipo tipo del pokemon (hierba, electrico...)
     */
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