import 'mocha';
import {expect} from 'chai';
import {Peliculas, Pelicula} from '../src/ejercicio-3/peliculas';
import {Series, Serie} from '../src/ejercicio-3/series';
import {Documentales, Documental} from '../src/ejercicio-3/documentales';

describe('Ejercicio 3: DSIflix', () => {
    var pelicula1 :Pelicula = {
        nombre: "El Padrino",
        año : "1972",
        genero : "Mafia",
        director : "Francis Ford Coppola"
    }

    var pelicula2 :Pelicula = {
        nombre: "Pulp Fiction",
        año : "1995",
        genero : "Policiaco",
        director : "Quentin Tarantino"
    }

    var pelicula3 :Pelicula = {
        nombre: "Kill Bill",
        año : "2003",
        genero : "Acción",
        director : "Quentin Tarantino"
    }

    var serie1 :Serie = {
        nombre: "Breaking Bad",
        año: "2008",
        genero: "Drama",
        temporadas: "5"
    }

    var serie2 :Serie = {
        nombre: "Lost",
        año: "2004",
        genero: "Suspense",
        temporadas: "6"
    }

    var documental1 :Documental = {
        nombre: "El Imperio Romano",
        año: "2016",
        genero: "Historia",
        duracion: "51 min"
    }

    var documental2 :Documental = {
        nombre: "Cosmos: A Spacetime Odyssey",
        año: "2014",
        genero: "Espacio",
        duracion: "44 min"
    }

    var peliculas = new Peliculas([pelicula1,pelicula2]);
    peliculas.add(pelicula3)

    var series = new Series([serie1,serie2]);

    var documentales = new Documentales([documental1,documental2])

    describe('Pruebas de las funciones de BasicStreamableCollection', () => {
        it('peliculas.getColeccion() not returns null', () => {
            expect(peliculas.getColeccion()).not.to.be.equal(null);
        });
    });

    describe('Pruebas de busqueda en la clase Peliculas', () => {
        it('Peliculas cuyo director es Tarantino', () => {
          console.log(peliculas.search("Quentin Tarantino","director"))
        });
        it('Peliculas del 2003', () => {
            console.log(peliculas.search("2003","año"))
        });
    });

    describe('Pruebas de busqueda en la clase Series', () => {
        it('Series con 5 temporadas', () => {
          console.log(series.search("5","temporadas"))
        });
        it('Series con nombre Lost', () => {
            console.log(series.search("Lost","nombre"))
        });
    });

    describe('Pruebas de busqueda en la clase Documentales', () => {
        it('Documentales de 51 minutos', () => {
          console.log(documentales.search("51 min","duracion"))
        });
        it('Documentales del Espacio', () => {
            console.log(documentales.search("Espacio","genero"))
        });
    });
});