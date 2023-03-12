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
import {Documental} from '../../src/ejercicio-1/documental'

describe('Getters de la clase documental', () => {
  const animales1 = new Documental("Animales1", ["sabana", "selva"], 2021);

  it("Getter del nombre de animales1 resulta 'Animales1' ", () => {
    expect(animales1.name).to.be.eql("Animales1");
  });

  it("Getter de las categorías de animales1 resulta ['sabana', 'selva']", () => {
    expect(animales1.categories).to.be.eql(["sabana", "selva"]);
  });
  
  it("Getter del año de animales1 resulta 2021", () => {
    expect(animales1.year).to.be.eql(2021);
  });
});