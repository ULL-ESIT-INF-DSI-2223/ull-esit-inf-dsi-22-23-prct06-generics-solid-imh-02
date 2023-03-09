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
import { Pelicula } from "./pelicula";

/**
 * Clase que permite representar una colección de películas
 */
export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  constructor(private peliculasList: Pelicula[]) {
    super(peliculasList);
  }

  searchCategories(category: string): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      Pelicula.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(Pelicula);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchName(name: string): Pelicula | undefined {
    let Pelicula_aux: Pelicula = new Pelicula("", [], 0, []);
    let flag = false;
    this.Elements.forEach((Pelicula) => {
      if (Pelicula.name === name) {
        Pelicula_aux = Pelicula;
        flag = true;
      }
    });
    if (flag !== false) {
      return Pelicula_aux;
    }
    return undefined;
  }

  searchYear(year: number): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      if(Pelicula.year === year) {
        result.push(Pelicula);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchCountry(country: string): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      Pelicula.countries.forEach((country_) =>{
        if (country === country_) {
          result.push(Pelicula);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }
}