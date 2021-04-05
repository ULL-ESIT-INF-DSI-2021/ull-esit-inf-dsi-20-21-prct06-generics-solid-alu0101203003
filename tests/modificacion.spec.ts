import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/modificacion/randomnumber';
import {RandomNumberSetCollection} from '../src/modificacion/randomnumbersetcollection';

describe('Modificación 05/04/2021', () => {

    var aleatorio1 = new RandomNumber;
    var aleatorio2 = new RandomNumber;
    var aleatorio3 = new RandomNumber;

    var conjunto1 = new RandomNumberSetCollection([aleatorio1,aleatorio2,aleatorio3]);
    
    describe('Pruebas de las funciones de RandomNumber', () => {
        it('aleatorio1.ran01 not returns null', () => {
            expect(aleatorio1.ran01).not.to.be.equal(null);
        });
        
        it('aleatorio1.ranNM not returns null', () => {
            expect(aleatorio1.ranNM(1,10)).not.to.be.equal(null);
        });

        it('aleatorio1.intRanNM not returns null', () => {
            expect(aleatorio1.intRanNM(1,10)).not.to.be.equal(null);
        });
    });

    describe('Funcion Imprimir entre 1 y 10', () => {
        it('Imprimir', () => {
        aleatorio1.print(1,10)
        });
    });

    describe('Pruebas de las funciones de RandomNumberSetCollection', () => {
        it('conjunto1.print(1,10) not returns null', () => {
            expect(conjunto1.print(1,10)).not.to.be.equal(null);
        });

        it('conjunto1.getCantidadDeElementos() not returns null', () => {
            expect(conjunto1.getCantidadDeElementos()).not.to.be.equal(null);
        });

        it('Imprimir', () => {
            conjunto1.print(1,10)
        });
    });
});