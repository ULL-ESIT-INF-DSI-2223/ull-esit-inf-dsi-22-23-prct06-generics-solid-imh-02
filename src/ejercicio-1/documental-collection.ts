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

import { BasicStreamableCollection } from "./basic-class";
import { Documental } from "./documental";

/**
 * Clase concreta que implementa una colección de Documentales, subcalse de BasicStreamableCollection
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {

  /**
   * Contructor de la colección de documentales
   * @param documentalList Colección de documentales
   */
  constructor(documentalList: Documental[]) {
    super(documentalList);
  }
  
  /**
   * Método para buscar un documental por su categoría
   * @param category Categoría para buscar documentales
   * @returns Devuelve una lista de documentales o undefined si la categoría no existe
   */
  searchCategories(category: string): Documental[] | undefined {
    const result: Documental[] = [];
    this.Elements.forEach((Documental) => {
      Documental.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(Documental);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  /**
   * Método para buscar un documental por nombre
   * @param name Nombre del documental a buscar
   * @returns Retorna el documental si lo encuentra o undefined en caso de no encontrarlo
   */
  searchName(name: string): Documental | undefined {
    let Documental_aux: Documental = new Documental("", [], 0);
    let flag = false;
    this.Elements.forEach((Documental) => {
      if (Documental.name === name) {
        Documental_aux = Documental;
        flag = true;
      }
    });
    if (flag !== false) {
      return Documental_aux;
    }
    return undefined;
  }

  /**
   * Método para buscar documentales por año
   * @param year Año para buscar documentales 
   * @returns Retorna una lista de documentales o undefined en caso de no existir el año
   */
  searchYear(year: number): Documental[] | undefined {
    const result: Documental[] = [];
    this.Elements.forEach((Documental) => {
      if(Documental.year === year) {
        result.push(Documental);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

}