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
 import {NumericPrintableCollection} from '../../src/ejercicio-modif/number-collection'

 describe('Clase NumericPrintableCollection', () => {
    const numeric1 = new NumericPrintableCollection([2,3,9]);
   it("Método add se le pasa 1 y resulta [2,3,9,1]", () => {
     expect(numeric1.addItem(1)).to.be.eql([2,3,9,1]);
   });

   it("Método getNumberOfItem() resulta ", () => {
    expect(numeric1.getNumberOfItems()).to.be.eql(4);
   });

   it("Método print() resulta '2,3,9,1'", () => {
    expect(numeric1.print()).to.be.eql("2,3,9,1");
   });

   it("Método removeItem(-1) resulta undefined", () => {
    expect(numeric1.removeItem(-1)).to.be.eql(undefined);
   });

   it("Método removeItem(2) resulta 9", () => {
    expect(numeric1.removeItem(2)).to.be.eql(9);
   });

   it("Método getItem(-1) resulta undefined", () => {
    expect(numeric1.getItem(-1)).to.be.eql(undefined);
   });

   it("Método getItem(1) resulta 3", () => {
    expect(numeric1.getItem(1)).to.be.eql(3);
   });


 });