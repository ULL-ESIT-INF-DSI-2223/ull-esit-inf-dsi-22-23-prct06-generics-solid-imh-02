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

export class Serie {
  constructor (private name_:string, private categories_: string[], private year_: number) {

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

export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(seriesList: Serie[]) {
    super(seriesList);
  }
  
  searchCategories(category: string): Serie[] | undefined{
    const result: Serie[] = [];
    this.Elements.forEach((serie) => {
      serie.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(serie);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchName(name: string): Serie | undefined {
    let serie_aux: Serie = new Serie("", [], 0);
    let flag = false;
    this.Elements.forEach((serie) => {
      if (serie.name === name) {
        serie_aux = serie;
        flag = true;
      }
    });
    if (flag !== false) {
      return serie_aux;
    }
    return undefined;
  }

  searchYear(year: number): Serie[] | undefined {
    const result: Serie[] = [];
    this.Elements.forEach((serie) => {
      if(serie.year === year) {
        result.push(serie);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

}