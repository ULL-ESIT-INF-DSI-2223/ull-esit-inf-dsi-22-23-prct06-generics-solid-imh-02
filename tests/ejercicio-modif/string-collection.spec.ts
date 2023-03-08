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
 import {StringPrintableCollection} from '../../src/ejercicio-modif/string-printable-collection'
 import {NumericPrintableCollection} from '../../src/ejercicio-modif/number-collection'

 describe('Clase StringPrintableCollection', () => {
    const numeric1 = new NumericPrintableCollection([1,2,3]).print();
    const numeric2 = new NumericPrintableCollection([4,5,6]).print();
    const string1 = new StringPrintableCollection([numeric1, numeric2])
    it("Método add '[7,8,9]' y resulta['1,2,3', '4,5,6', '7,8,9']", () => {
        expect(string1.addItem(new NumericPrintableCollection([7,8,9]).print())).to.be.eql(["1,2,3", "4,5,6", "7,8,9"]);
      });
   
      it("Método getNumberOfItem() resulta ", () => {
       expect(string1.getNumberOfItems()).to.be.eql(3);
      });

      it("Método removeItem(-1) resulta undefined", () => {
       expect(string1.removeItem(-1)).to.be.eql(undefined);
      });
   
      it("Método removeItem(2) resulta '7,8,9'", () => {
       expect(string1.removeItem(2)).to.be.eql("7,8,9");
      });
   
      it("Método getItem(-1) resulta undefined", () => {
       expect(string1.getItem(-1)).to.be.eql(undefined);
      });
   
      it("Método getItem(1) resulta 3", () => {
       expect(string1.getItem(1)).to.be.eql("4,5,6");
      });
      it ("Método print() resulta '1,2,3,4,5,6'", () => {
        expect(string1.print()).to.be.eql("1,2,3,4,5,6");
      });
 });