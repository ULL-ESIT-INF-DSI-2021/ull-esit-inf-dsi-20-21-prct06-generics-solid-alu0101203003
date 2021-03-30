import {BasicStreamableCollection} from "./basicstreamablecollection"

/**
 * Tipo Documental.
 * Especifica los atributos que debe tener toda documental
 */
export type Documental = {
    nombre:string,
    año :string,
    genero :string,
    duracion :string
}

/**
 * Clase Documentales.
 * Almacena la coleccion de las documentales y permite buscar dentro de esta coleccion
 * Hereda de la clase BasicStreamableCollection
 */
export class Documentales extends BasicStreamableCollection<Documental>{
    /**
     * Constructor
     * @param coleccion coleccion de documentales (usa la plantilla de BasicStreamableCollection)
     */
    constructor(coleccion :Documental[]){
        super(coleccion)
    }
    /**
     * Funcion Search.
     * Busca, dentro de la coleccion, los elementos que tienen el atributo especificado
     * @param atributo atributo a encontrar
     * @param tipo tipo del atributo
     */
     search(atributo :string, tipo :string){
        var resultado :Documental[] = []
        
        switch (tipo){
            case "nombre":
                this.coleccion.forEach(element => {
                    if (element.nombre == atributo) {
                        resultado.push(element)
                    }
                });
                break;
            case "año":
                this.coleccion.forEach(element => {
                    if (element.año == atributo) {
                        resultado.push(element)
                    }
                });
                break;
            case "genero":
                this.coleccion.forEach(element => {
                    if (element.genero == atributo) {
                        resultado.push(element)
                    }
                });
                break;
            case "duracion":
                this.coleccion.forEach(element => {
                    if (element.duracion == atributo) {
                        resultado.push(element)
                    }
                });
                break;
            default:
                break;
        }
        return resultado
     }
}