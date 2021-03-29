import {Fighter} from "./fighter";


/**
 * Clase Dc
 * Representa a los luchadores del universo DC
 * Hereda de la clase Fighter
 */
export class Dc extends Fighter {
    /**
     * Constructor
     * @param nombre nombre del luchador (heredado de Fighter)
     * @param peso peso del luchador (heredado de Fighter)
     * @param altura altura del luchador (heredada de Fighter)
     * @param phrase catching phrase del luchador (heredada de Fighter)
     * @param estadisticas estadisticas asignables al atributo "EstadisticasBasicas" del luchador (heredadas de Fighter)
     * @param ciudad ciudad donde reside el luchador 
     */
    constructor (nombre :string, peso :number, altura :number, phrase :string, estadisticas :number[], private ciudad :string){
        super(nombre,peso,altura,phrase,estadisticas)
    }

    /**
     * Funcion getCiudad
     * @returns ciudad
     */
     public getCiudad(){
        return this.ciudad
    }

    /**
     * Funcion setCiudad
     * @param ciudad ciudad a asignar
     */
    public setCiudad(ciudad :string){
        this.ciudad = ciudad
    }
}