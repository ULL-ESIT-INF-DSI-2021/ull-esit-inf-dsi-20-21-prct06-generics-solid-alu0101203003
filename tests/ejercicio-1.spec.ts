import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Dragonball} from '../src/ejercicio-1/dragonball';

describe('Ejercicio 1: El combate definitivo', () => {
  var pikachu = new Pokemon("Pikachu",6.0, 0.4,"pika pi",[49,49,45,45], "electrico")
  var goku = new Dragonball("Goku", 1.75, 62.0,"Espero que renazcas como un buen tipo, te estaré esperando para pelear",[68,40,60,50], "saiyan")

  describe('Probar llamadas a las funciones de la clase Pokemon', () => {
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

    it('pikachu.getTipo() returns electrico', () => {
      expect(pikachu.getTipo()).to.be.equal('electrico');
    });

    it('pikachu.getEstadisticas() returns [49,49,45,45]', () => {
      expect(pikachu.getEstadisticas()).not.to.be.equal(null);
    });
  });

  describe('Probar llamadas a las funciones de la clase Dragonball', () => { 
    it('pikachu.getRaza() returns saiyan', () => {
      expect(goku.getRaza()).to.be.equal('saiyan');
    });
  });
});
