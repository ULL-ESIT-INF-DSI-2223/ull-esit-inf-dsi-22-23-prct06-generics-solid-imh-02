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
 * Clase para la representación de una canción, con su nombre, duración, los géneros en los que se clasifica, 
 * si es un single o no y el número de reproducciones de la misma. 
 */
export class Cancion{
  private nombre_: string;
  private duracion_: number;
  private generos_: string[];
  private single_: boolean;
  private numero_reproducciones_: number;

  // Constructor 
  constructor(nombre: string, duracion: number, generos: string[], single: boolean, numero_reproducciones: number) {
    this.nombre_ = nombre;
    this.duracion_ = duracion;
    this.generos_ = generos;
    this.single_ = single;
    this.numero_reproducciones_ = numero_reproducciones;
  }

  // Getters
  get nombre() {return this.nombre_;}
  get duracion() {return this.duracion_;}
  get generos() {return this.generos_;}
  get single() {return this.single_;}
  get numero_reproducciones() {return this.numero_reproducciones_;}

}