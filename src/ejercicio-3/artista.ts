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

import { Disco } from "./disco";

/**
 * Clase que representa todas las propiedades de un artista.
 * 1. Nombre
 * 2. Número de oyente mensuales
 * 3. Discografía
 */
export class Artista {
  private nombre_: string;
  private numero_oyentes_ : number;
  private discografia_: Disco[];

  constructor(nombre: string, numero_oyentes: number, discografia: Disco[]) {
    this.nombre_ = nombre;
    this.numero_oyentes_ = numero_oyentes;
    this.discografia_ = discografia;
  }

  get nombre() {return this.nombre_;}
  get numero_oyente() {return this.numero_oyentes_;}
  get discografia() {return this.discografia_;}
  
}