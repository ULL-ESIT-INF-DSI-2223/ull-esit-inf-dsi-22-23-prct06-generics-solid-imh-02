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

/**
 * Clase abstracta para una colección de elementos streameable
 */
export abstract class BasicStreamableCollection<T>
  implements
    Streamable<T>,
    StreamableSearchCategories<T>,
    StreamableSearchName<T>,
    StreamableSearchYear<T> {

  /**
   * Permite crear el array de elementos
   * @param elements Array de elementos
   */
  constructor (private elements: T[]) {
  }

  /**
   * Método que permite añadir una elemento a la colección
   * @param input Elemento a añadir a la colección
   */
  addElement(input: T): void {
    this.elements.push(input);
  }

  /**
   * Método para obtener el número de elementos de la colección
   * @returns Retorna el número de elementos de la colección
   */
  getNumberElements(): number {
    return this.elements.length;
  }

  /**
   * Método para obtener la colección entera de elementos
   */
  get Elements(): T[] {
    return this.elements;
  }

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por nombre
   * @param name Nombre del elemento a buscar
   */
  abstract searchName(name: string): T | undefined;

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por categoría
   * @param category Categoría del elemento a buscar
   */
  abstract searchCategories(category: string): T[] | undefined;

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por año
   * @param year Año del elemento a buscar
   */
  abstract searchYear(year: number): T[] | undefined;
}
