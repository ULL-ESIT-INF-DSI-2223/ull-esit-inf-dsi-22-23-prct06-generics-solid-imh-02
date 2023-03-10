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

export class Single {
  private nombre_: string;
  private anio_publicacion_: number;
  private cancion_: Cancion;
  private versiones_: Cancion[];

  constructor(nombre: string, año_publicacion: number, cancion: Cancion, versiones: Cancion[]) {
    this.nombre_ = nombre;
    this.anio_publicacion_ = año_publicacion;
    this.cancion_ = cancion;
    this.versiones_ = versiones;
  }

  get nombre() {return this.nombre_;}
  get anio_publicacion() {return this.anio_publicacion_;}
  get cancion() {return this.cancion_;}
  get versiones() {return this.versiones_;}
}