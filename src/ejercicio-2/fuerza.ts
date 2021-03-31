import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosFuerza :string[] = ["Kilopondios a Newtons","Newtons a Kilopondios",
                                "Newtons a Dinas","Dinas a Newtons"]

/**
 * Clase Fuerza.
 * Posibilita los cambios de unidades de Fuerza.
 * Implementa la interfaz isConvertible
 */
export class Fuerza implements isConvertible<string[]> {
    cambios = cambiosFuerza;
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
                resultado = this.unidad*9.80665
                break;
            case this.cambios[1]:
                resultado = this.unidad/9.80665
                break;
            case this.cambios[2]:
                resultado = this.unidad*100000
                break;
            case this.cambios[3]:
                resultado = this.unidad/100000
                break;
            default:
                break;
        }
        return resultado
    }
}