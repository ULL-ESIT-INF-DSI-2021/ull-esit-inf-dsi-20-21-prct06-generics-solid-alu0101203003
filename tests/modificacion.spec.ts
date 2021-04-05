import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/modificacion/randomnumber';

describe('Modificación 05/04/2021', () => {

    var aleatorio1 = new RandomNumber;
    
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

        
    describe('Muestras por pantalla', () => {
        it('aleatorio1.ran01', () => {
            console.log(aleatorio1.ran01())
        });
        
        it('aleatorio1.ranNM ', () => {
            console.log(aleatorio1.ranNM(1,10))
        });

        it('aleatorio1.intRanNM', () => {
            console.log(aleatorio1.intRanNM(1,10))
        });
    });

});