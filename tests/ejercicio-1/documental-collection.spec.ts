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
import { DocumentalCollection } from '../../src/ejercicio-1/documental-collection';
import { Documental } from '../../src/ejercicio-1/documental';

describe('Métodos de una colección de documentales', () => {
  const animales1 = new Documental("Animales1", ["sabana", "selva"], 2021);
  const animales2 = new Documental("Animales2", ["sabana"], 2022);
  const animales3 = new Documental("Animales3", ["selva"], 2022);
  const documentalList = new DocumentalCollection([animales1, animales2, animales3]);
  it("Obtener el número de documentales, resulta 3", () => {
    expect(documentalList.getNumberElements()).to.be.eql(3);
  });

  it("Buscar por nombre 'Animales1' resulta animales1", () => {
    expect(documentalList.searchName("Animales1")).to.be.eql(animales1);
  });

  it("Buscar por nombre 'Animales4' resulta undefined, porque no está almacenado", () => {
    expect(documentalList.searchName("Animales4")).to.be.eql(undefined);
  });

  it("Buscar por categoria 'sabana' resulta [animales1, animales2]", () => {
    expect(documentalList.searchCategories("sabana")).to.be.eql([animales1, animales2]);
  });

  it("Buscar por categoria 'cocina' resulta undefined", () => {
    expect(documentalList.searchCategories("cocina")).to.be.eql(undefined);
  });

  it("Buscar por año 2022 resulta [animales2, animales3]", () => {
    expect(documentalList.searchYear(2022)).to.be.eql([animales2, animales3]);
  });

  it("Buscar por año 1999 resulta undefined", () => {
    expect(documentalList.searchYear(1999)).to.be.eql(undefined);
  });
});