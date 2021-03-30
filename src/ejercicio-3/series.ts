import {BasicStreamableCollection} from "./basicstreamablecollection"

/**
 * Tipo Serie.
 * Especifica los atributos que debe tener toda serie
 */
export type Serie = {
    nombre:string,
    año :string,
    genero :string,
    temporadas :string
}

/**
 * Clase Series.
 * Almacena la coleccion de las series y permite buscar dentro de esta coleccion
 * Hereda de la clase BasicStreamableCollection
 */
export class Series extends BasicStreamableCollection<Serie>{
    /**
     * Constructor
     * @param coleccion coleccion de series (usa la plantilla de BasicStreamableCollection)
     */
    constructor(coleccion :Serie[]){
        super(coleccion)
    }
    /**
     * Funcion Search.
     * Busca, dentro de la coleccion, los elementos que tienen el atributo especificado
     * @param atributo atributo a encontrar
     * @param tipo tipo del atributo
     */
     search(atributo :string, tipo :string){
        var resultado :Serie[] = []
        
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
            case "temporadas":
                this.coleccion.forEach(element => {
                    if (element.temporadas == atributo) {
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