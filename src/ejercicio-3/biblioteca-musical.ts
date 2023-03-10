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

import { Artista } from "./artista"
import { Disco } from "./disco"
import {Cancion} from "./cancion"


/**
 * La clase biblioteca musical permite agrupar a una serie de artistas, cada uno de ellos con sus características correspondientes.
 */
export class BibliotecaMusical_ {
  artistas_: Artista[] = [];

  /**
   * Método que permite almacenar un nuevo artista y su información asociada
   * @param artista Artista a insertar
   */
  almacenarArtista(artista: Artista): void {
    this.artistas_.push(artista);
  }

  /**
   * Método para imprimir toda la información dentro de la biblioteca musical
   */
  imprimirInformacion(): void {
    console.table(this.artistas_);
  }
  
  /**
   * Método que permite la búsqueda de un determinado artista
   * @param entradaArtista Artista a buscar
   * @returns True en caso de encontrar el artista y false en caso contrario
   */
  buscarArtista(entradaArtista: Artista) {
    let flag = false;
    let nombre_artista = "";
    this.artistas_.forEach((artista) => {
      if (artista.nombre === entradaArtista.nombre) {
        console.table(artista);
        flag = true;
        nombre_artista = artista.nombre;
      }
    });
    if (flag !== false) {
      return nombre_artista;
    } else {
      return undefined;
    }
  }

  /**
   * Método para buscar un disco en la biblioteca musical.
   * @param entradaDisco Disco a buscar.
   * @returns True en caso de encontrar el disco requerido y false en caso contrario.
   */
  buscarDisco(entradaDisco: Disco) {
    let nombre_disco = "";
    let flag = false;
    this.artistas_.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (entradaDisco.nombre === disco.nombre) {
          nombre_disco = disco.nombre;
          flag = true;
          console.table(disco);
        }
      });
    });
    if (flag !== false) {
      return nombre_disco;
    } else {
      return undefined;
    }
  }

  /**
   * Método para buscar una canción dentro de la biblioteca musical
   * @param entradaCancion Canción a buscar
   * @returns True en caso de encontrar la canción y false en caso contrario
   */
  buscarCancion(entradaCancion: Cancion) {
    let flag = false;
    let nombre_cancion = "";
    this.artistas_.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        disco.canciones.forEach((cancion) => {
          if (entradaCancion.nombre === cancion.nombre) {
            console.table(cancion);
            flag = true;
            nombre_cancion = cancion.nombre;
          }
        });
      });
    });
    if (flag !== false) {
      return nombre_cancion;
    } else {
      return undefined;
    }
  }

  /**
   * Método que permite contar cuentas canciones tiene un determinado disco.
   * @param disco Disco del que se quiere contar las canciones.
   * @returns Retorna o bien el número de canciones si el disco está en la biblioteca, o undefined si el disco no está.
   */
  numeroCanciones(disco: Disco): number | undefined{
    let flag = false;
    let numero_canciones = 0;
    this.artistas_.forEach((artista) => { // Buscamos si el disco está entre las artista de la biblioteca
      artista.discografia.forEach((discoElement) =>{
        if(discoElement.nombre === disco.nombre) {
          flag = true;
          numero_canciones = discoElement.canciones.length;
        }
      });
    });
    if(flag === false) {
      return undefined;
    } else {
      return numero_canciones;
    }
  }

  /**
   * Método que permite calcular la duración total de un disco.
   * @param disco Disco del que se quiere calcular la duración total.
   * @returns Retorna o bien la duración total si el disco está en la biblioteca, o undefined si el disco no está.
   */
  duracionDisco(disco: Disco): number | undefined{
    let flag = false;
    let duracion_total = 0;
    this.artistas_.forEach((artista) => { // Buscamos si el disco está entre las artista de la biblioteca
      artista.discografia.forEach((discoElement) =>{
        if(discoElement.nombre === disco.nombre) {
          flag = true;
          discoElement.canciones.forEach((cancion) => {
            duracion_total += cancion.duracion;
          });
        }
      });
    });
    if(flag === false) {
      return undefined;
    } else {
      return duracion_total;
    }
  }

  /**
   * Método para devolver el número de reproducciones de un disco, según sus canciones. 
   * @param disco Disco del que se quiere calcular las reproducciones.
   * @returns Retorna o bien el número total de reproducciones si el disco está en la biblioteca, o undefined si el disco no está.
   */
  numeroReproducciones(disco: Disco): number | undefined {
    let flag = false;
    let reproducciones_totales = 0;
    this.artistas_.forEach((artista) => { // Buscamos si el disco está entre las artista de la biblioteca
      artista.discografia.forEach((discoElement) =>{
        if(discoElement.nombre === disco.nombre) {
          flag = true;
          discoElement.canciones.forEach((cancion) => {
            reproducciones_totales += cancion.numero_reproducciones;
          });
        }
      });
    });
    if(flag === false) {
      return undefined;
    } else {
      return reproducciones_totales;
    }
  }
}