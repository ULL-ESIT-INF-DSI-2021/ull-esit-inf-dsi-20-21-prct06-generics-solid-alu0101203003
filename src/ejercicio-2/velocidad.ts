import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosVelocidad :string[] = ["Kilometros/hora a Metros/segundo","Metros/segundo a Kilometros/hora",
                                "Kilometros/hora a Millas/hora","Millas/hora a Kilometros/hora"]
/**
 * Clase Velocidad.
 * Posibilita los cambios de unidades de Velocidad.
 * Implementa la interfaz isConvertible
 */
export class Velocidad implements isConvertible<string[]> {
    cambios = cambiosVelocidad;
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
                resultado = this.unidad/3.6
                break;
            case this.cambios[1]:
                resultado = this.unidad*3.6
                break;
            case this.cambios[2]:
                resultado = this.unidad/1.609
                break;
            case this.cambios[3]:
                resultado = this.unidad*1.609
                break;
            default:
                break;
        }
        return resultado
    }
}