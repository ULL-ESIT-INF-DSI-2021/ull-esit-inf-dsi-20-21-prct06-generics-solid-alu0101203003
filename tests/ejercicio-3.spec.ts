import 'mocha';
import {expect} from 'chai';
import {Peliculas, Pelicula} from '../src/ejercicio-3/peliculas';

describe('Ejercicio 3: DSIflix', () => {
    var pelicula1 :Pelicula = {
        nombre: "El Padrino",
        año : "1972",
        genero : "Mafia",
        director : "Francis Ford Coppola"
    }

    var pelicula2 :Pelicula = {
        nombre: "El Padrino 2",
        año : "1972",
        genero : "Mafia",
        director : "Francis Ford Coppola"
    }

    var pelicula3 :Pelicula = {
        nombre: "El Padrino 3",
        año : "1989",
        genero : "Mafia",
        director : "Francis Ford Coppola"
    }

    var peliculas = new Peliculas([pelicula1,pelicula2]);
    peliculas.add(pelicula3)

    describe('Primera prueba', () => {
        it('Comprobar si search devuelve lo que queremos', () => {
          console.log(peliculas.search("1972","año"))
        });
    });
});