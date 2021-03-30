import {Streamable} from "./streamable";
import {Searchable} from "./searchable";

export abstract class BasicStreamableCollection<T> implements Streamable<T>,Searchable<T>{
    constructor(public coleccion: T[]){}

    /**
     * Funcion add.
     * Añade una emision nueva a la coleccion
     * @param emision emision a añadir
     */
    add(emision :T){
        this.coleccion.push(emision)
    }

    /**
     * Funcion getColeccion. 
     * Devuelve la coleccion de emisiones
     */
    getColeccion(){
        return this.coleccion
    }

    /**
     * Funcion Search.
     * Busca, dentro de la coleccion, los elementos que tienen el atributo especificado
     * @param atributo atributo a encontrar
     * @param tipo tipo del atributo
     */
    abstract search(atributo :string, tipo :string): T[]
}