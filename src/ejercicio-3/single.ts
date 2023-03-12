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
 * Clase que permite representar un single
 */
export class Single {
  private nombre_: string;
  private anio_publicacion_: number;
  private canciones_: Cancion[];

  /**
   * Constructor de la clase single
   * @param nombre Nombre del single
   * @param año_publicacion Año de publicación del single
   * @param versiones Versiones de la canción 
   */
  constructor(nombre: string, año_publicacion: number, versiones: Cancion[]) {
    this.nombre_ = nombre;
    this.anio_publicacion_ = año_publicacion;
    this.canciones_ = versiones;
  }

  /**
   * Getter del nombre
   */
  get nombre() {return this.nombre_;}

  /**
   * Getter del año de publicación 
   */
  get anio_publicacion() {return this.anio_publicacion_;}

  /**
   * Getter de las versiones del single
   */
  get canciones() {return this.canciones_;}
}