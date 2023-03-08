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
import { Pelicula } from '../../src/ejercicio-1/pelicula';


describe('Getters de la clase Pelicula', () => {
  const AntMan = new Pelicula("Ant-Man", ["acción", "superhéroes"], 2023, ["EEUU", "Turquía"]);

  it("Getter del nombre de AntMan resulta 'Ant-Man' ", () => {
    expect(AntMan.name).to.be.eql("Ant-Man");
  });

  it("Getter de las categorías de Ant-Man resulta ['acción', 'superhéroes']", () => {
    expect(AntMan.categories).to.be.eql(["acción", "superhéroes"]);
  });
  
  it("Getter del año de Ant-Man resulta 2023", () => {
    expect(AntMan.year).to.be.eql(2023);
  });

  it("Getter de los países de rodaje de Ant-Man resulta ['EEUU', 'Turquía'] ", () => {
    expect(AntMan.countries).to.be.eql(["EEUU", "Turquía"]);
  });
});