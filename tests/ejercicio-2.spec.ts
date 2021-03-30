import 'mocha';
import {expect} from 'chai';
import {Longitud} from '../src/ejercicio-2/longitud';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Tiempo} from '../src/ejercicio-2/tiempo';
import {Masa} from '../src/ejercicio-2/masa';
import {Fuerza} from '../src/ejercicio-2/fuerza';
import {Temperatura} from '../src/ejercicio-2/temperatura';

describe('Ejercicio 2: Conversor de unidades', () => {
    var longitud1 = new Longitud(20)
    var longitud2 = new Longitud(2.5)

    var velocidad1 = new Velocidad(120)

    var tiempo1 = new Tiempo(4)

    var masa1 = new Masa(300)

    var fuerza1 = new Fuerza(10)

    var temperatura1 = new Temperatura(40)

    describe('Prueba de la clase longitud', () => {
        it('longitud1.convert("Kilometros a Metros") returns value 20000.0', () => {
          expect(longitud1.convert("Kilometros a Metros")).to.be.equal(20000);
        });

        it('longitud1.convert("Centimetros a Metros") returns value 0.2', () => {
            expect(longitud1.convert("Centimetros a Metros")).to.be.equal(0.2);
        });

        it('longitud2.convert("Kilometros a Centimetros") returns value 250000', () => {
            expect(longitud2.convert("Kilometros a Centimetros")).to.be.equal(250000);
        });
    });

    describe('Prueba de la clase velocidad', () => {
        it('velocidad1.convert("Kilometros/hora a Metros/segundo") returns value 33.333333333333336', () => {
          expect(velocidad1.convert("Kilometros/hora a Metros/segundo")).to.be.equal(33.333333333333336);
        });

        it('velocidad1.convert("Millas/hora a Kilometros/hora") returns value 193.07999999999998', () => {
            expect(velocidad1.convert("Millas/hora a Kilometros/hora")).to.be.equal(193.07999999999998);
        });
    });

    describe('Prueba de la clase tiempo', () => {
        it('tiempo1.convert("Semanas a Dias") returns value 28', () => {
          expect(tiempo1.convert("Semanas a Dias")).to.be.equal(28);
        });

        it('tiempo1.convert("Meses a Dias") returns value 120', () => {
            expect(tiempo1.convert("Meses a Dias")).to.be.equal(120);
        });
    });

    describe('Prueba de la clase masa', () => {
        it('masa1.convert("Kilos a Toneladas") returns value 0.3', () => {
          expect(masa1.convert("Kilos a Toneladas")).to.be.equal(0.3);
        });

        it('masa1.convert("Kilos a Gramos") returns value 300000', () => {
            expect(masa1.convert("Kilos a Gramos")).to.be.equal(300000);
        });
    });

    describe('Prueba de la clase fuerza', () => {
        it('fuerza1.convert("Kilopondios a Newtons") returns value 98.06649999999999', () => {
          expect(fuerza1.convert("Kilopondios a Newtons")).to.be.equal(98.06649999999999);
        });

        it('fuerza1.convert("Newtons a Dinas") returns value 1000000', () => {
            expect(fuerza1.convert("Newtons a Dinas")).to.be.equal(1000000);
        });
    });

    describe('Prueba de la clase temperatura', () => {
        it('temperatura1.convert("Celcius a Fahrenheit") returns value 104', () => {
          expect(temperatura1.convert("Celcius a Fahrenheit")).to.be.equal(104);
        });

        it('temperatura1.convert("Celcius a Kelvin") returns value 313.15', () => {
            expect(temperatura1.convert("Celcius a Kelvin")).to.be.equal(313.15);
        });
    });

});