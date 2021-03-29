import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Dragonball} from '../src/ejercicio-1/dragonball';
import {Dc} from '../src/ejercicio-1/dc';
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';

describe('Ejercicio 1: El combate definitivo', () => {
  var pikachu = new Pokemon("Pikachu",6.0, 0.4,"pika pi",[49,49,45,45], "electrico")

  var goku = new Dragonball("Goku", 1.75, 62.0,"Espero que renazcas como un buen tipo, te estaré esperando para pelear",[68,40,60,50], "saiyan")
  var vegeta = new Dragonball("Vegeta", 1.64, 56.0,"Insectooo!!!",[70,35,70,50], "saiyan")

  var batman = new Dc("Batman", 1.88, 95.0, "I'm Batman", [45,70,55,60], "Gotham")
  var superman = new Dc("Superman", 1.92, 102.0, "No es un pajaro, no es un avión...", [50,65,70,65], "Metrópolis")

  var pokedex = new Pokedex([pikachu,goku,vegeta,batman,superman])
  var combate1 = new Combat(pokedex.getLuchadores()[0],pokedex.getLuchadores()[1])
  var combate2 = new Combat(pokedex.getLuchadores()[2],pokedex.getLuchadores()[3])
  var combate3 = new Combat(pokedex.getLuchadores()[1],pokedex.getLuchadores()[4])


  describe('Probar llamadas a las funciones de la clase Luchador', () => {
    it('pikachu.getNombre() returns value Pikachu', () => {
      expect(pikachu.getNombre()).to.be.equal('Pikachu');
    });

    it('pikachu.getPeso() returns value 6.0', () => {
      expect(pikachu.getPeso()).to.be.equal(6.0);
    });

    it('pikachu.getAltura() returns value 0.4', () => {
      expect(pikachu.getAltura()).to.be.equal(0.4);
    });

    it('pikachu.getPhrase() returns value pika ki', () => {
      expect(pikachu.getPhrase()).to.be.equal("pika pi");
    });

    it('pikachu.getEstadisticas() returns [49,49,45,45]', () => {
      expect(pikachu.getEstadisticas()).not.to.be.equal(null);
    });
  });

  describe('Probar llamadas a las funciones de la clase Pokemon', () => {
    it('pikachu.getTipo() returns electrico', () => {
      expect(pikachu.getTipo()).to.be.equal('electrico');
    });
  });

  describe('Probar llamadas a las funciones de la clase Dragonball', () => { 
    it('goku.getRaza() returns saiyan', () => {
      expect(goku.getRaza()).to.be.equal('saiyan');
    });
  });

  describe('Probar llamadas a las funciones de la clase Dc', () => { 
    it('batman.getCiudad() returns Gotham', () => {
      expect(batman.getCiudad()).to.be.equal('Gotham');
    });
  });

  describe('Probar llamadas a las funciones de la clase Combat', () => {
    it('combate1.getL1() returns value pikachu', () => {
      expect(combate1.getL1()).to.be.equal(pikachu);
    });

    it('combate1.getL2() returns value goku', () => {
        expect(combate1.getL2()).to.be.equal(goku);
    });
  });
  
  describe('Probar llamadas a las funciones de la clase Pokedex', () => {
    it('pokedex.getLuchadores() not returns null', () => {
      expect(pokedex.getLuchadores()).not.to.be.equal(null);
    });

});  

  describe('Probar llamadas a las funciones de la clase Combat', () => {
    it('combate1.getL1() returns value pikachu', () => {
      expect(combate1.getL1()).to.be.equal(pikachu);
    });

    it('combate1.getL2() returns value goku', () => {
        expect(combate1.getL2()).to.be.equal(goku);
    });
  }); 

  describe('Prueba para mostrar por pantalla', () => {
    it('Mostrar 3 combates', () => {
        console.log("\n","--Empieza el primer combate--","\n")
        console.log(combate1.start());
        console.log("\n","--Empieza el segundo combate--","\n")
        console.log(combate2.start());
        console.log("\n","--Empieza el tercer combate--","\n")
        console.log(combate3.start());
    });       
});
});
