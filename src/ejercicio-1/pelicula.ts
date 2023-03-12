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
 * Clase que representa una película con sus propiedades
 */
export class Pelicula {
    /**
   * Constructor que determina las propiedades de una Película 
   * @param name_ Nombre de la película
   * @param categories_ Categorías de la película 
   * @param year_ Año de la película 
   * @param countries_ Países de la película
   */
  constructor (private name_: string, private categories_: string[], private year_: number, private countries_: string[]) {

  }

  /**
   * Getter del nombre de una película
   */
  get name() {
    return this.name_;
  }

  /**
   * Getter de las categorías de una película 
   */
  get categories() {
    return this.categories_;
  }

  /**
   * Getter del año de una película
   */
  get year () {
    return this.year_;
  }

  /**
   * Getter de los países de una película 
   */
  get countries() {
    return this.countries_;
  }
}