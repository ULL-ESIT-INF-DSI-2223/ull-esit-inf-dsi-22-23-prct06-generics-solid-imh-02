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
import { SeriesCollection } from '../../src/ejercicio-1/series';
import { Serie } from '../../src/ejercicio-1/series';

// describe('Métodos de una colección de series', () => {
//   const outlander = new Serie("Outlander", ["drama"], 2014);
//   const loki = new Serie("Loki", ["ciencia ficción", "superhéroes"], 2021);
//   const moonKnight = new Serie("Moon Knight", ["acción", "superhéroes"], 2022);
//   const seriesList1 = new SeriesCollection([outlander, loki, moonKnight]);

//   it("Obtener el número de series almacendas, resulta 3", () => {
//     expect(seriesList1.getNumberElements()).to.be.eql(3);
//   });

//   it("Buscar por nombre Loki resulta Loki", () => {
//     expect(seriesList1.searchName("Loki")).to.be.eql(loki);
//   });

//   it("Buscar por nombre Squid Games resulta undefined, porque no está almacenada", () => {
//     expect(seriesList1.searchName("Squid Games")).to.be.eql(undefined);
//   });

//   it("Buscar por categoria 'superhéroes' resulta [loki, moonKnigth]", () => {
//     expect(seriesList1.searchCategories("superhéroes")).to.be.eql([loki, moonKnight]);
//   });

//   it("Buscar por categoria 'comedia' resulta undefined", () => {
//     expect(seriesList1.searchCategories("comedia")).to.be.eql(undefined);
//   });

//   it("Buscar por año 2022 resulta [moonKnigth]", () => {
//     expect(seriesList1.searchYear(2022)).to.be.eql([moonKnight]);
//   });

//   it("Buscar por año 1999 resulta undefined", () => {
//     expect(seriesList1.searchYear(1999)).to.be.eql(undefined);
//   });
// });