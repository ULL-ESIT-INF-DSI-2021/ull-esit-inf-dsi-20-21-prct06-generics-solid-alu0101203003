import {isConvertible} from "./isconvertible";

/**
 * Array que contiene los posibles cambios 
 * (La conversion deberá coincidir con alguno de ellos)
*/
var cambiosLongitud :string[] = ["Metros a Kilometros","Kilometros a Metros",
                                "Metros a Centimetros","Centimetros a Metros",
                                "Kilometros a Centimetros","Centimetros a Kilometros"]

export class Longitud implements isConvertible<string[]> {
    cambios = cambiosLongitud;

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
                resultado = this.unidad/1000
                break;
            case this.cambios[1]:
                resultado = this.unidad*1000
                break;
            case this.cambios[2]:
                resultado = this.unidad*100
                break;
            case this.cambios[3]:
                resultado = this.unidad/100
                break;
            case this.cambios[4]:
                resultado = this.unidad*100000
                break;
            case this.cambios[5]:
                resultado = this.unidad/100000
                break;
            default:
                break;
        }
        return resultado
    }
}