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

/**
 * 
 */
export interface Streamable<T> {
  addElement(input: T): void;
  getNumberElements(): number;
  get Elements(): T[];
}

export interface StreamableSearchName<T> {
  searchName(name: string): T | undefined;
}

export interface StreamableSearchCategories<T> {
  searchCategories(category: string): T[] | undefined;
}

export interface StreamableSearchYear<T> {
  searchYear(year: number): T[] | undefined;
}