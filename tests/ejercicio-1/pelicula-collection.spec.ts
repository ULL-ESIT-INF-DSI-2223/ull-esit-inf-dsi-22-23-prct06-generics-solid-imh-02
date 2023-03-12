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
import {PeliculasCollection} from '../../src/ejercicio-1/pelicula-collection'
import { Pelicula } from '../../src/ejercicio-1/pelicula';

describe('Métodos de una colección de películas', () => {
  const AntMan = new Pelicula("Ant-Man", ["acción", "súperhéroes"], 2023, ["EEUU", "Turquía"]);
  const Avatar = new Pelicula("Avatar-El camino del agua", ["ciencia ficción", "aventura"], 2022, ["EEUU"]);
  const EndGame = new Pelicula("Avengers Endgame", ["súperhéroes", "acción"], 2019, ["EEUU"]);
  const moviesList = new PeliculasCollection([AntMan, Avatar, EndGame]);

  it("Obtener el número de películas almacenadas, resulta 3", () => {
    expect(moviesList.getNumberElements()).to.be.eql(3);
  });

  it("Buscar por nombre 'Ant-Man' resulta AntMan", () => {
    expect(moviesList.searchName("Ant-Man")).to.be.eql(AntMan);
  });

  it("Buscar por nombre 'SpiderMan' resulta undefined, porque no está almacenada", () => {
    expect(moviesList.searchName("SpiderMan")).to.be.eql(undefined);
  });

  it("Buscar por categoria 'súperhéroes' resulta [AntMan, EndGame]", () => {
    expect(moviesList.searchCategories("súperhéroes")).to.be.eql([AntMan, EndGame]);
  });

  it("Buscar por categoria 'comedia' resulta undefined", () => {
    expect(moviesList.searchCategories("comedia")).to.be.eql(undefined);
  });

  it("Buscar por año 2022 resulta [moonKnigth]", () => {
    expect(moviesList.searchYear(2022)).to.be.eql([Avatar]);
  });

  it("Buscar por año 1999 resulta undefined", () => {
    expect(moviesList.searchYear(1999)).to.be.eql(undefined);
  });

  it("Buscar por país EEUU resulta [AntMan, Avatar, EndGame]", () => {
    expect(moviesList.searchCountry("EEUU")).to.be.eql([AntMan, Avatar, EndGame]);
  });

  it("Buscar por país España resulta undefined", () => {
    expect(moviesList.searchCountry("España")).to.be.eql(undefined);
  });

});