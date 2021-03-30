import {BasicStreamableCollection} from "./basicstreamablecollection"

/**
 * Tipo Pelicula.
 * Especifica los atributos que debe tener toda pelicula
 */
export type Pelicula = {
    nombre:string,
    año :string,
    genero :string,
    director :string
}

/**
 * Clase Peliculas.
 * Almacena la coleccion de las peliculas y permite buscar dentro de esta coleccion
 * Hereda de la clase BasicStreamableCollection
 */
export class Peliculas extends BasicStreamableCollection<Pelicula>{
    /**
     * Constructor
     * @param coleccion coleccion de peliculas (usa la plantilla de BasicStreamableCollection)
     */
    constructor(coleccion :Pelicula[]){
        super(coleccion)
    }
    /**
     * Funcion Search.
     * Busca, dentro de la coleccion, los elementos que tienen el atributo especificado
     * @param atributo atributo a encontrar
     * @param tipo tipo del atributo
     */
     search(atributo :string, tipo :string){
        var resultado :Pelicula[] = []
        
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
            case "director":
                this.coleccion.forEach(element => {
                    if (element.director == atributo) {
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