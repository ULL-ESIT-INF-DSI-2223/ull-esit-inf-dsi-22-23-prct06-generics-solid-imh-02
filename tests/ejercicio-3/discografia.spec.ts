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
import {Discografia} from '../../src/ejercicio-3/discografia'

// describe('Getter y setters de una discografía', () => {
//   const disco1 = new Disco("Dónde quiero estar", 2023, [new Cancion("Vista Al Mar", 180, ["reggaeton"], false, 1000000), new Cancion("Wanda", 180, ["reggaeton"], false, 1000000)]);
//   it("Getter del nombre, resulta 'Dónde quiero estar' ", () => {
//     expect(disco1.nombre).to.be.eql("Dónde quiero estar");
//   });

//   it("Getter del año de publicación resulta 2023", () => {
//     expect(disco1.anio_publicacion).to.be.eql(2023);
//   });

//   it("Getter de las canciones", () => {
//     expect(disco1.canciones).to.be.eql([new Cancion("Vista Al Mar", 180, ["reggaeton"], false, 1000000), new Cancion("Wanda", 180, ["reggaeton"], false, 1000000)]);
//   });
// });