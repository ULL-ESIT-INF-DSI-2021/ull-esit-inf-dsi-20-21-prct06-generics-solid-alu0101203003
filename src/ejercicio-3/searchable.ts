/**
 * Interfaz Searchable para la funcion de busqueda.
 * (Segregacion de Interfaces)
 */
 export interface Searchable<T> {
    /**
     * Funcion Search.
     * Busca, dentro de la coleccion, los elementos que tienen el atributo especificado
     * @param atributo atributo a encontrar
     * @param tipo tipo del atributo
     */
    search(atributo :string, tipo :string): T[]
}