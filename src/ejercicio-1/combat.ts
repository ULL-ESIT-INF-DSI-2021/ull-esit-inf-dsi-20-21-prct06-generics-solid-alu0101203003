import {Fighter} from '../ejercicio-1/fighter';

/**
 * Clase para implementar los combates
 */
export class Combat {
    /**
     * Constructor
     * @param luchador1 luchador que ataca primero
     * @param luchador2 luchador que ataca segundo
     */
    constructor (private luchador1 :Fighter, private luchador2 :Fighter){
    }

    /**
     * Funcion getL1
     * @returns luchador1
     */
    public getL1(){
        return this.luchador1
    }

    /**
     * Funcion setL1
     * @param luchador luchador a asignar como luchador1
     */
    public setL1(luchador :Fighter){
        this.luchador1 = luchador
    }

    /**
     * Funcion getL2
     * @returns luchador2
     */
    public getL2(){
        return this.luchador2
    }

    /**
     * Funcion setL2
     * @param luchador luchador a asignar como luchador2
     */
    public setL2(luchador :Fighter){
        this.luchador2 = luchador
    }

    /**
     * Funcion luchadorDamage
     * La efectividad se calcula en funcion del indice de masa corporal (IMC)
     * @param atacante luchador que tiene el turno para atacar (1 o 2)
     * @returns daño realizado por el luchador que ataca
     */
    public luchadorDamage(atacante :number){
        var imc1 = this.luchador1.getAltura()/(Math.pow(this.luchador1.getPeso(),2));
        var imc2 = this.luchador2.getAltura()/(Math.pow(this.luchador2.getPeso(),2));
        var at1 = this.luchador1.getEstadisticas().ataque
        var df1 = this.luchador1.getEstadisticas().defensa
        var at2 = this.luchador2.getEstadisticas().ataque
        var df2 = this.luchador2.getEstadisticas().defensa

        var efectividad1 :number = 0.0;
        var efectividad2 :number = 0.0;
    
        switch (true) {
            case imc1 > imc2:
                efectividad1 = 2.0;
                efectividad2 = 0.5;
                break;
            case imc1 == imc2:
                efectividad1 = 1.0;
                efectividad2 = 1.0;
                break;
            case imc1 < imc2:
                efectividad1 = 0.5;
                efectividad2 = 2.0;
                break;
            default:
                break;
        }

        if (efectividad1 == 0 || efectividad2 == 0){
            return ("Error: Peso/Altura mal especificado/s")
        }

        var damage :number = 0
        if (atacante == 1){
        damage = 50 * (at1/df2) * efectividad1;
        }
        if (atacante == 2){
        damage = 50 * (at2/df1) * efectividad2;
        }
        return damage;
    }

    /**
     * Funcion start
     * Inicia el combate e inidica las variaciones de las vidas de los luchadores enfrentados con cada ataque
     * @returns mensaje inidicando que luchador resulta vencedor
     */
    public start(){

        while (this.luchador1.getEstadisticas().hp > 0 && this.luchador2.getEstadisticas().hp > 0){
            var ataque1 :(number|string) = this.luchadorDamage(1)
            var ataque2 :(number|string) = this.luchadorDamage(2)
            if (typeof ataque1 === "number" && typeof ataque2 === "number"){
                ataque1 = Math.round(ataque1);
                ataque2 = Math.round(ataque2);

            var vidaNueva2 : number = this.luchador2.getEstadisticas().hp - ataque1;
            if (vidaNueva2 < 0){
                vidaNueva2 = 0;
            }
            this.luchador2.setHp(vidaNueva2)
            console.log(this.luchador1.getNombre(),"ha hecho",ataque1, "puntos de daño")
            console.log(this.luchador1.getPhrase())
            console.log("A",this.luchador2.getNombre(),"le quedan",this.luchador2.getEstadisticas().hp,"puntos de vida")
            if (this.luchador2.getEstadisticas().hp == 0){
                break;
            }

            var vidaNueva1 : number = this.luchador1.getEstadisticas().hp - ataque2;
            if (vidaNueva1 < 0){
                vidaNueva1 = 0;
            }
            this.luchador1.setHp(vidaNueva1)
            console.log(this.luchador2.getNombre(),"ha hecho",ataque2, "puntos de daño")
            console.log(this.luchador2.getPhrase())
            console.log("A",this.luchador1.getNombre(),"le quedan",this.luchador1.getEstadisticas().hp,"puntos de vida")
            if (this.luchador1.getEstadisticas().hp == 0){
                break;
            }

            } else {
                return "Error: Peso/Altura de algún luchador mal especificado"
            }
        }

        if (this.luchador1.getEstadisticas().hp <= 0){
            return ('\n' + this.luchador2.getNombre() + ' ha vencido')
        } else{
            return ('\n' + this.luchador1.getNombre() + ' ha vencido')
        }
    }
}