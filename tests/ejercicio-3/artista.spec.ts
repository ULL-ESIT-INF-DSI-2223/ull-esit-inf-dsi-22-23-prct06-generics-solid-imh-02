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
import {Artista} from '../../src/ejercicio-3/artista'
import { Disco } from '../../src/ejercicio-3/disco';
import { Cancion } from '../../src/ejercicio-3/cancion';

describe('Getter y setters de un artista', () => {
  const artista1 = new Artista("Quevedo", 1000000, [new Disco("Dónde quiero estar", 2023, [new Cancion("Vista Al Mar", 180, ["reggaeton"], false, 1000000), new Cancion("Wanda", 180, ["reggaeton"], false, 1000000)])]);
  it("Getter del nombre, resulta 'Quevedo' ", () => {
    expect(artista1.nombre).to.be.eql("Quevedo");
  });
  it("Getter del número de oyentes, resulta  1000000", () => {
    expect(artista1.numero_oyente).to.be.eql(1000000);
  });
  it("Getter de la discografía", () => {
    expect(artista1.discografia).to.be.eql([new Disco("Dónde quiero estar", 2023, [new Cancion("Vista Al Mar", 180, ["reggaeton"], false, 1000000), new Cancion("Wanda", 180, ["reggaeton"], false, 1000000)])]);
  });
});