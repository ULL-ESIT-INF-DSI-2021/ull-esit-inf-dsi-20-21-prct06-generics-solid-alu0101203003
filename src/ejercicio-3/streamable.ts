/**
 * Interfaz Streameable para una colección de emisiones
 */
 export interface Streamable<T> {
    coleccion: T[]

    /**
     * Funcion add.
     * Añade una emision nueva a la coleccion
     * @param emision emision a añadir
     */
    add(emision :T): void;

    /**
     * Funcion getColeccion. 
     * Devuelve la coleccion de emisiones
     */
    getColeccion(): T[];
}