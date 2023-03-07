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

import { Streamable } from "./streamable";
import { StreamableSearchCategories } from "./streamable";
import { StreamableSearchName } from "./streamable";
import { StreamableSearchYear } from "./streamable";

export abstract class BasicStreamableCollection<T>
  implements
    Streamable<T>,
    StreamableSearchCategories<T>,
    StreamableSearchName<T>,
    StreamableSearchYear<T> {

  constructor (private elements: T[]) {
  }

  addElement(input: T): string {
    this.elements.push(input);
  }

  getNumberElements(): number {
    return this.elements.length;
  }

  abstract searchName(name: string): T;
  abstract searchCategories(category: string): T;
  abstract searchYear(year: number): T;
}
