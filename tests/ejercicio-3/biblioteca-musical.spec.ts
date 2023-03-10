/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Práctica 6: Clases e interfaces genéricas. Principios SOLID
 * @author Ismael Martín Herrera
 * @email alu0101397375@ull.edu.es
 * @date 12/03/2023
 */

import 'mocha';
import {expect} from 'chai';
import {BibliotecaMusical_} from '../../src/ejercicio-3/biblioteca-musical';
import {Artista} from '../../src/ejercicio-3/artista';
import {Cancion} from '../../src/ejercicio-3/cancion';
import {Disco} from '../../src/ejercicio-3/disco';

describe('Biblioteca Musical', () => {
  const biblioteca1 = new BibliotecaMusical_;
  
  // Canciones
  const cancion1 = new Cancion("cancion1", 120, ["genero2"], false, 500);
  const cancion2 = new Cancion("cancion2", 120, ["genero1"], false, 500);
  const cancion3 = new Cancion("cancion3", 120, ["genero2"], false, 60);
  const cancion4 = new Cancion("cancion4", 120, ["genero2"], true, 60);

  // Discos
  const Disco1 = new Disco("disco1", 2010, [cancion1, cancion2]);
  const Disco2 = new Disco("disco2", 2020, []);
  const Disco3 = new Disco("disco3", 2022, [cancion3, cancion4]);
  // Artistas
  const Artista1 = new Artista("artista1", 200, [Disco1]);
  const Artista2 = new Artista("artista2", 300, [Disco2, Disco3]);
  const Artista3 = new Artista("artista3", 300, [Disco2]);

  // Añadir un artista
  it("Funcionalidad para añadir Artista1 y Artista2 ", () => {
    biblioteca1.almacenarArtista(Artista1);
    expect(biblioteca1.artistas_).to.be.eql([Artista1]);
    biblioteca1.almacenarArtista(Artista2);
    expect(biblioteca1.artistas_).to.be.eql([Artista1, Artista2]);
  });

  // Buscar artista
  it("Búsqueda de Artista1 debería devolver 'artista1'", () => {
    expect(biblioteca1.buscarArtista(Artista1)).to.be.eql("artista1");
  });
  it("Búsqueda de Artista3 debería devolver undefined, porque el artista no está en la biblioteca", () => {
    expect(biblioteca1.buscarArtista(Artista3)).to.be.eql(undefined);
  });
  
  // Buscar disco
  it("Búsqueda de Disco1 debería devolver 'disco1'", () => {
    expect(biblioteca1.buscarDisco(Disco1)).to.be.eql("disco1");
  });
  it("Búsqueda de Disco nuevo debería devolver undefined", () => {
    expect(biblioteca1.buscarDisco(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

   // Buscar canción
   it("Búsqueda de Canción1 debería devolver 'cancion1'", () => {
    expect(biblioteca1.buscarCancion(cancion1)).to.be.eql("cancion1");
  });
  it("Búsqueda de una canción nueva debería devolver undefined", () => {
    expect(biblioteca1.buscarCancion(new Cancion("cancion5", 120, ["genero3"], true, 60))).to.be.eql(undefined);
  });

  // Contar canciones
  it("Conteo de canciones incluídas en el Disco1, debería retornar 2", () => {
    expect(biblioteca1.numeroCanciones(Disco1)).to.be.eql(2);
  });
  it("Conteo de canciones incluídas en el Disco2, debería retornar 0 porque no tiene canciones", () => {
    expect(biblioteca1.numeroCanciones(Disco2)).to.be.eql(0);
  });
  it("Conteo de canciones incluídas en un disco nuevo, debería retornar undefined porque el disco no está en la biblioteca", () => {
    expect(biblioteca1.numeroCanciones(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

  // Duración de disco
  it("Cálculo de la duración del disco1 debería devolver 240", () => {
    expect(biblioteca1.duracionDisco(Disco1)).to.be.eql(240);
  });
  it("Cálculo de la duración del disco2 debería devolver 0, porque no tiene canciones", () => {
    expect(biblioteca1.duracionDisco(Disco2)).to.be.eql(0);
  });
  it("Cálculo de la duración de un disco nuevo debería devolver undefined porque el disco no está en la biblioteca", () => {
    expect(biblioteca1.duracionDisco(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

  // Número de reproducciones
  it("Cálculo del número de reproducciones del Disco3 debería devolver 120", () => {
    expect(biblioteca1.numeroReproducciones(Disco3)).to.be.eql(120);
  });
  it("Cálculo del número de reproducciones del Disco2 debería devolver 0, porque no tiene canciones", () => {
    expect(biblioteca1.numeroReproducciones(Disco2)).to.be.eql(0);
  });
  it("Cálculo del número de reproducciones de un disco nuevo debería devolver undefined, porque el disco no está en la biblioteca", () => {
    expect(biblioteca1.numeroReproducciones(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });
});