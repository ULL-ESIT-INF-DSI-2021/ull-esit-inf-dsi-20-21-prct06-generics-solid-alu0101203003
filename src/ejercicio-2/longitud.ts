import {isConvertible} from "./isconvertible";

var cambiosLongitud :string[] = ["MetrosAKilometros","KilometrosAMetros"]

export class Longitud implements isConvertible<string[]> {
    cambios = cambiosLongitud;

    constructor(public unidad :number){}

    convert(conversion :string){
        var resultado :number = 0;
        switch (conversion) {
            case cambiosLongitud[0]:
                resultado = this.unidad/1000
                break;
            case cambiosLongitud[1]:
                resultado = this.unidad*1000
                break;
            default:
                break;
        }
        return resultado
    }
}