/**
 * Clase RandomNumber
 * Permite obtener numeros aleatorios
 */
 export class RandomNumber {
    /**
     * Funcion ran01
     * @returns Un número aleatorio en punto flotante generado en el rango [0, 1].
     */
     public ran01(){
        return Math.random()
    }

    /**
     * Funcion ranNM
     * @returns Un número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     */
     public ranNM(n :number, m :number){
        return Math.random() * (m-n) + n;
    }

    /**
     * Funcion intRanNM
     * @returns Un número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
     */
     public intRanNM(n :number, m :number){
        return Math.floor(Math.random() * (m-n)) + n;
    }

    /**
     * Funcion print
     * @param n valor minimo del rango
     * @param m valor maximo del rango
     * Imprime todas las formas de obtener el numero aleatorio
     */
    public print(n :number, m :number){
        console.log("ran01: ",this.ran01())
        console.log("ranNM: ",this.ranNM(n,m))
        console.log("intRanNM: ",this.intRanNM(n,m))
    }

    
}