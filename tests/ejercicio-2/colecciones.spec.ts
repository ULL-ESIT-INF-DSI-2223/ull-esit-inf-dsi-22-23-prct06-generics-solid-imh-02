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
import {Collection} from '../../src/ejercicio-2/collection'

describe('Operaciones de una colección', () => {
  const numericCollection = new Collection<number>([1,2,3,4,5]);
  const stringCollection = new Collection<string>(["a", "hola", "que", "tal"]);
  const numericCollection2 = new Collection<number>([-1,0]);
  it("Método append numericCollection y numericCollection2 resulta [1,2,3,4,5,-1,0]", () => {
    expect(numericCollection.append(["a", "hola", "que", "tal"])).to.be.eql([1,2,3,4,5,"a","hola","que","tal"]);
  });

  it("Método concatenate numericCollection, stringCollection y numericCollection2 resulta [1,2,3,4,5,'a','hola','que','tal', -1, 0]", () => {
    expect(numericCollection.concatenate(stringCollection, numericCollection)).to.be.eql([1,2,3,4,5,"a","hola","que","tal"]);
  });

});