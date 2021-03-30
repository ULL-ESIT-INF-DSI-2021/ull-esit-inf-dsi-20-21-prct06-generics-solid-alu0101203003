import 'mocha';
import {expect} from 'chai';
import {Longitud} from '../src/ejercicio-2/longitud';

describe('Ejercicio 2: Conversor de unidades', () => {
    var longitud1 = new Longitud(20)
    var longitud2 = new Longitud(2.5)

    describe('Prueba de la clase longitud', () => {
        it('longitud1.convert("Kilometros a Metros") returns value 20000.0', () => {
          expect(longitud1.convert("Kilometros a Metros")).to.be.equal(20000);
        });

        it('longitud1.convert("Centimetros a Metros") returns value 0.2', () => {
            expect(longitud1.convert("Centimetros a Metros")).to.be.equal(0.2);
        });

        it('longitud1.convert("Kilometros a Centimetros") returns value 250000', () => {
            expect(longitud2.convert("Kilometros a Centimetros")).to.be.equal(250000);
        });
    });

});