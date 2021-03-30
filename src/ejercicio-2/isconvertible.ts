/**
 * Interfaz isConvertible para magnitudes
 */
 export interface isConvertible<T> {
    unidad :number;
    cambios :T

    convert(conversion :string): number;
}