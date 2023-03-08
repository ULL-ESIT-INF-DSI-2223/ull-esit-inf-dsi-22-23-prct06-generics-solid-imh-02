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
 * Clase que representa un documental con sus propiedades
 */
export class Documental {
  /**
   * Constructor que determina las propiedades de un documental
   * @param name_ Nombre del documental
   * @param categories_ Categorías del documental
   * @param year_ Año del documental
   */
  constructor (private name_: string, private categories_: string[], private year_: number) {

  }

  get name() {
    return this.name_;
  }

  get categories() {
    return this.categories_;
  }

  get year () {
    return this.year_;
  }
}