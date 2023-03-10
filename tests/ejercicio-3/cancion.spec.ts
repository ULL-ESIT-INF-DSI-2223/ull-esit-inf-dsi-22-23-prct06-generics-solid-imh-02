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
import { Cancion } from '../../src/ejercicio-3/cancion';

describe('Getter y setters de una canción', () => {
  const cancion1 = new Cancion("Vista Al Mar", 180, ["reggaeton"], false, 1000000);
  it("Getter del nombre, resulta 'Vista Al Mar' ", () => {
    expect(cancion1.nombre).to.be.eql("Vista Al Mar");
  });

  it("Getter de la duración, resulta 180 ", () => {
    expect(cancion1.duracion).to.be.eql(180);
  });

  it("Getter de los géneros, resulta ['reggaeton'] ", () => {
    expect(cancion1.generos).to.be.eql(["reggaeton"]);
  });

  it("Getter del single retorna false ", () => {
    expect(cancion1.single).to.be.eql(false);
  });
  it("Getter del número de reproducciones resulta 1000000 ", () => {
    expect(cancion1.numero_reproducciones).to.be.eql(1000000);
  });
});