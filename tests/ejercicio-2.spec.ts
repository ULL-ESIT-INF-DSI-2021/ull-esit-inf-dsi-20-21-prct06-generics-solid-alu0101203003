import 'mocha';
import {expect} from 'chai';
import {Longitud} from '../src/ejercicio-2/longitud';

describe('Ejercicio 2: Conversor de unidades', () => {
    var longitud1 = new Longitud(20)

    describe('Prueba funcionamiento inicial', () => {
        it('longitud1.convert("KilometrosAMetros") returns value 20000', () => {
          expect(longitud1.convert("KilometrosAMetros")).to.be.equal(20000);
        });
    });

});