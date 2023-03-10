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
import { Cancion } from "./cancion";

/**
 * Clase para representar un disco, con su nombre, año de publicación y array de canciones. 
 */
export class Disco {
  private nombre_: string;
  private anio_publicacion_: number;
  private canciones_: Cancion[];

  constructor(nombre: string, año_publicacion: number, canciones: Cancion[]) {
    this.nombre_ = nombre;
    this.anio_publicacion_ = año_publicacion;
    this.canciones_ = canciones;
  }

  get nombre() {return this.nombre_;}
  get anio_publicacion() {return this.anio_publicacion_;}
  get canciones() {return this.canciones_;}
  
}