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
  const numericCollection2 = new Collection<number>([-1,0]);
  const numericCollection3 = new Collection<number>([2]);
  const numericCollection4 = new Collection<number>([3]);
  const numericCollection5 = new Collection<number>([4]);
  const numericCollection6 = new Collection<number>([4,7,8]);

  it("Método push(6) a numericCollection resulta [1,2,3,4,5,6]", () => {
    expect(numericCollection.push(6)).to.be.eql([1,2,3,4,5,6]);
  });

  it("Método push(10) a numericCollection resulta [1,2,3,4,5,6, 10]", () => {
    expect(numericCollection.push(10)).to.be.eql([1,2,3,4,5,6,10]);
  });

  it("Método length a numericCollection resulta 7", () => {
    expect(numericCollection.length()).to.be.eql(7);
  });
  
  it("Método length a numericCollection2 resulta 2", () => {
    expect(numericCollection2.length()).to.be.eql(2);
  });

  it("Método at(1) a numericCollection resulta 2", () => {
    expect(numericCollection.at(1)).to.be.eql(2);
  });

  it("Método at(7) a numericCollection resulta undefined", () => {
    expect(numericCollection.at(7)).to.be.eql(undefined);
  });

  it("Método getElements() a numericCollection resulta [1,2,3,4,5,6, 10]", () => {
    expect(numericCollection.elements).to.be.eql([1,2,3,4,5,6,10]);
  });

  it("Método append numericCollection y numericCollection2 resulta [1,2,3,4,5,6, 10,-1,0]", () => {
    expect(numericCollection.append(numericCollection2)).to.be.eql([1,2,3,4,5,6,10,-1,0]);
  });
  
  it("Método append numericCollection2 y numericCollection resulta [-1,0,1,2,3,4,5,6,10]", () => {
    expect(numericCollection2.append(numericCollection)).to.be.eql([-1,0,1,2,3,4,5,6,10,-1,0]);
  });

  it("Método concatenate numericCollection3, numericCollection4, numericCollection5 resulta [2,3,4]", () => {
    expect(numericCollection3.concatenate(numericCollection4, numericCollection5)).to.be.eql(new Collection([2,3,4]));
  });

  it("Método filter() para números mayores que 5 de numericCollection6 resulta [7,8]", () => {
    const result = numericCollection6.filter(element => element > 5);
    expect(result).to.be.eql(new Collection([7,8]));
  });


  it("Método filter() para números menores que 0 de numericCollection6 resulta []", () => {
    const result = numericCollection6.filter(element => element < 0);
    expect(result).to.be.eql(new Collection([]));
  });

  it("Método map() para que a todos los elementos se le sume 1 de numericCollection6 resulta [5,8,9]", () => {
    const result = numericCollection6.map(element => element + 1);
    expect(result).to.be.eql(new Collection([5,8,9]));
  });

  it("Método reduce()  con acumulador 2 resulta 448", () => {
    const result = numericCollection6.reduce((acumulador, element) => acumulador * element, 2);
    expect(result).to.be.eql(448);
  });

  it("Método reverse() numericCollection6 resulta [8,7,4]", () => {
    expect(numericCollection6.reverse()).to.be.eql(new Collection([8,7,4]));
  });

  it("Método forEarch() sumando los elementos de numericCollection6 resulta 19", () => {
    let result = 0;
    numericCollection6.forEach(element => result += element);
    expect(result).to.be.eql(19);
  });
});