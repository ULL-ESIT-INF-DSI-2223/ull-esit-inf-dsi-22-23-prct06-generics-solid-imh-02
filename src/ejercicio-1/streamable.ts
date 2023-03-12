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
 * La interfaz establece que se debe tener un método para añadir elementos a la colección, un método
 * para obtener el número de elementos de la colección y un getter de toda la colección. 
 */
export interface Streamable<T> {
  addElement(input: T): void;
  getNumberElements(): number;
  get Elements(): T[];
}

/**
 * La interfaz establece que la clase que la implemente debe tener un método que permita buscar un elemento 
 * de la colección por su nombre. 
 */
export interface StreamableSearchName<T> {
  searchName(name: string): T | undefined;
}

/**
 * La interfaz establece que la clase que la implemente debe tener un método para buscar un elemento por su categoría. 
 */
export interface StreamableSearchCategories<T> {
  searchCategories(category: string): T[] | undefined;
}

/**
 * La interfaz establece que la clase que la implemente debe tener un método para buscar un elemento por su año. 
 */
export interface StreamableSearchYear<T> {
  searchYear(year: number): T[] | undefined;
}