import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosVolumen :string[] = ["Metros Cubicos a Litros","Litros a Metros Cubicos",
                                "Litros a Mililitros","Mililitros a Litros"]
/**
 * Clase Volumen.
 * Posibilita los cambios de unidades de Volumen.
 * Implementa la interfaz isConvertible
 */
export class Volumen implements isConvertible<string[]> {
    cambios = cambiosVolumen;
    /**
     * Constructor
     * @param unidad unidad de medida que va a ser convertida
     */
    constructor(public unidad :number){}

    /**
     * Funcion convert. 
     * Convierte la unidad del objeto al que se aplica 
     * en función de la conversion recibida como parámetro
     * @param conversion
     */
    convert(conversion :string){
        var resultado :number = 0;
        switch (conversion) {
            case this.cambios[0]:
                resultado = this.unidad*1000
                break;
            case this.cambios[1]:
                resultado = this.unidad/1000
                break;
            case this.cambios[2]:
                resultado = this.unidad*1000
                break;
            case this.cambios[3]:
                resultado = this.unidad/1000
                break;
            default:
                break;
        }
        return resultado
    }
}