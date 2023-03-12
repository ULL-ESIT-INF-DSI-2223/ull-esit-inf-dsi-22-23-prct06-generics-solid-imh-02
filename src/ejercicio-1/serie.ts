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
 * Clase que representa una serie con sus propiedades
 */
export class Serie {

  /**
   * Constructor que determina las propiedades de una serie 
   * @param name_ Nombre de la serie
   * @param categories_ Categorías de la serie
   * @param year_ Año de la serie
   */
  constructor (private name_:string, private categories_: string[], private year_: number) {

  }


  /**
   * Getter del nombre de una serie
   */
  get name() {
    return this.name_;
  }

  /**
   * Getter de las categorías de una serie
   */
  get categories() {
    return this.categories_;
  }

    /**
   * Getter del año de un serie
   */
  get year () {
    return this.year_;
  }
}