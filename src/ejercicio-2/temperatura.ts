import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosTemperatura :string[] = ["Fahrenheit a Celcius","Celcius a Fahrenheit",
                                "Kelvin a Celcius","Celcius a Kelvin"]
/**
 * Clase Temperatura.
 * Posibilita los cambios de unidades de Temperatura.
 * Implementa la interfaz isConvertible
 */
export class Temperatura implements isConvertible<string[]> {
    cambios = cambiosTemperatura;
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
                resultado = (this.unidad-32)*5/9
                break;
            case this.cambios[1]:
                resultado = (this.unidad*(9/5))+32
                break;
            case this.cambios[2]:
                resultado = this.unidad - 273.15
                break;
            case this.cambios[3]:
                resultado = this.unidad + 273.15
                break;
            default:
                break;
        }
        return resultado
    }
}