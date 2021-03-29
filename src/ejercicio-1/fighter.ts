export abstract class Fighter {
    private EstadisticasBasicas = {
        ataque : 0,
        defensa : 0,
        velocidad :0,
        hp : 0,
    }

    /**
     * Constructor
     * @param nombre nombre del luchador
     * @param peso peso del luchador
     * @param altura altura del luchador
     * @param phrase catching phrase del luchador
     * @param estadisticas estadisticas asignables al atributo "EstadisticasBasicas" del luchador
     */
    constructor (private nombre :string, private peso :number, private altura :number, private phrase :string, estadisticas :number[]){
        this.EstadisticasBasicas.ataque = estadisticas[0];
        this.EstadisticasBasicas.defensa = estadisticas[1];
        this.EstadisticasBasicas.velocidad = estadisticas[2];
        this.EstadisticasBasicas.hp = estadisticas[3];
    }

    /**
     * Funcion getNombre
     * @returns nombre
     */
    public getNombre(){
        return this.nombre
    }

    /**
     * Funcion setNombre
     * @param nombre nombre a asignar
     */
    public setNombre(nombre :string){
        this.nombre = nombre
    }

    /**
     * Funcion getPeso
     * @returns peso
     */
    public getPeso(){
        return this.peso
    }

    /**
     * Funcion setPeso
     * @param peso peso a asignar
     */
    public setPeso(peso :number){
        this.peso = peso
    }

    /**
     * Funcion getAltura
     * @returns altura
     */
    public getAltura(){
        return this.altura
    }

    /**
     * Funcion setAltura
     * @param altura altura a asignar
     */
    public setAltura(altura :number){
        this.altura = altura
    }

    /**
     * Funcion getPhrase
     * @returns phrase
     */
    public getPhrase(){
        return this.phrase
    }

    /**
     * Funcion setPhrase
     * @param phrase phrase a asignar
     */
    public setPhrase(phrase :string){
        this.phrase = phrase
    }
    
    /**
     * Funcion getEstadisticas
     * @returns EstadisticasBasicas
     */
    public getEstadisticas(){
        return this.EstadisticasBasicas
    }

    /**
     * Funcion setHp
     * @param hp vida a asignar
     */
    public setHp(hp :number){
        this.EstadisticasBasicas.hp = hp;
    }
}