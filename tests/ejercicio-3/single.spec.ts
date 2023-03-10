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
import {Single} from '../../src/ejercicio-3/single'

describe('Getter y setters de un single', () => {
  const cancion1 = new Cancion("Cancion1", 180, ["pop"], true, 1000000);
  const version2 = new Cancion("Version2", 185, ["pop"], true, 5000);
  const single1 = new Single("Single1", 2023, cancion1, [cancion1, version2]);
  it("Getter del nombre, resulta 'Single1' ", () => {
    expect(single1.nombre).to.be.eql("Single1");
  });

  it("Getter del año de publicación resulta 2023", () => {
    expect(single1.anio_publicacion).to.be.eql(2023);
  });

  it("Getter de la canción del single", () => {
    expect(single1.cancion).to.be.eql(cancion1);
  });

  it("Getter de las versiones del single", () => {
    expect(single1.versiones).to.be.eql([cancion1, version2]);
  });
});