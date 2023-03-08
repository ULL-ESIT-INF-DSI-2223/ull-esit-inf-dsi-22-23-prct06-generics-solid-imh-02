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
import { Serie } from '../../src/ejercicio-1/serie';

describe('Getters de la clase serie', () => {
  const loki = new Serie("Loki", ["ciencia ficción", "superhéroes"], 2021);

  it("Getter del nombre de loki resulta 'Loki' ", () => {
    expect(loki.name).to.be.eql("Loki");
  });

  it("Getter de las categorías de loki resulta ['ciencia ficción', 'superhéroes']", () => {
    expect(loki.categories).to.be.eql(["ciencia ficción", "superhéroes"]);
  });
  
  it("Getter del año de loki resulta 2021", () => {
    expect(loki.year).to.be.eql(2021);
  });
});