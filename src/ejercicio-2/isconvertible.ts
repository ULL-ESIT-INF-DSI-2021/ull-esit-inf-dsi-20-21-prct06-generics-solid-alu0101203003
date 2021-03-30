/**
 * Interfaz isConvertible para magnitudes
 */
 export interface isConvertible<T> {
    unidad :number;
    cambios :T

    /**
     * Funcion convert. 
     * Convierte la unidad del objeto al que se aplica 
     * en función de la conversion recibida como parámetro
     * @param conversion
     */
    convert(conversion :string): number;
}