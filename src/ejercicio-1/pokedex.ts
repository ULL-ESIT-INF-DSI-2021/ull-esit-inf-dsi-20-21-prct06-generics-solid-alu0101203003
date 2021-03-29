import {Pokemon} from './pokemon';
import {Dragonball} from './dragonball';
import {Dc} from './dc';
/**
 * Clase que almacena un conjunto de luchadores
 */
 export class Pokedex {
    /**
     * Constructor
     * @param luchadores conjunto de luchadores
     */
    constructor(private luchadores :(Pokemon | Dragonball | Dc)[]){}

    /**
     * Funcion getLuchadores
     * @returns luchadores a obtener
     */
    public getLuchadores(){
        return this.luchadores
    }

    /**
     * Funcion setLuchadores
     * @param luchadores conjunto de luchadores a asignar
     */
    public setLuchadores(luchadores :(Pokemon | Dragonball | Dc) []){
        this.luchadores = luchadores
    }

    /**
     * Funcion addLuchador
     * @param luchador luchador a añadir al conjunto
     */
    public addLuchador(luchador :(Pokemon | Dragonball | Dc)){
        this.luchadores.push(luchador)
    }
}