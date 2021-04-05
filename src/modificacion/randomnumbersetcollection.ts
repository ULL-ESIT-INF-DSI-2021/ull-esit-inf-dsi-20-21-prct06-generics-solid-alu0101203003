import {RandomNumber} from "./randomnumber";

/**
 * Clase RandomNumberSetCollection
 * Genera un conjunto de numeros aleatorios
 */
 export class RandomNumberSetCollection implements Iterable<RandomNumber> {

    private numeros: Set<RandomNumber>;

    /**
     * Constructor
     * @param numeros conjunto de numeros aleatorios
     */
    constructor(numeros: RandomNumber[]) {
      this.numeros = new Set(numeros);
    }
    /**
     * Funcion addNumero.
     * Añade un numero al conjunto
     * @param numero numero a añadir
     */
    addNumero(numero :RandomNumber) {
        this.numeros.add(numero);
    }
    
    /**
     * Funcion getCantidadDeElementos.
     * @returns tamaño del conjunto
     */
    getCantidadDeElementos() {
        return this.numeros.size;
    }
    
    /**
     * Iterador.
     * Recorre el conjunto
     * @returns valores del conjunto
     */
    [Symbol.iterator](): Iterator<RandomNumber> {
        return this.numeros.values();
    }

    /**
     * Funcion print
     * @param n valor minimo del rango
     * @param m valor maximo del rango
     * Imprime todas las formas de obtener el numero aleatorio para cada número del conjunto.
     * (Llama a la función print para cada valor)
     */
    public print(n :number, m :number) {
        this.numeros.forEach((numeros) => numeros.print(n,m));
    }

    
}