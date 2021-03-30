import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosTiempo :string[] = ["Semanas a Dias","Dias a Semanas",
                                "Dias a Meses","Meses a Dias"]

export class Tiempo implements isConvertible<string[]> {
    cambios = cambiosTiempo;

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
                resultado = this.unidad*7
                break;
            case this.cambios[1]:
                resultado = this.unidad/7
                break;
            case this.cambios[2]:
                resultado = this.unidad/30
                break;
            case this.cambios[3]:
                resultado = this.unidad*30
                break;
            default:
                break;
        }
        return resultado
    }
}