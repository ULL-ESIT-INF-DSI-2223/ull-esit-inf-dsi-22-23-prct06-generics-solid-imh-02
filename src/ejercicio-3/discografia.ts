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

import { Disco } from "./disco";
import { Single } from "./single";

/**
 * Clase que permite representar una discografía como un conjunto de Disco o Single
 */
export class Discografia<T extends Disco | Single> {

  /**
   * Constructor de la clase
   * @param discografia_ Recibe un array de Discos, Singles o Discos y Singles
   */
  constructor(private discografia_: T[]) {

  }

  /**
   * Getter de toda la discografía
   */
  get Discografia() {
    return this.discografia_;
  }
}