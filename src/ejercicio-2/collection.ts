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
 * Clase que permite representar una lista o colección y sus operaciones sin usar Array.prototype
 */
export class Collection<T> {

  /**
   * Constructor de la clase
   * @param elements_ Lista que se construye
   */
  constructor (private elements_: T[]) {

  }

  /**
   * Getter para obtener toda la lista. 
   */
  get elements() {
    return this.elements_;
  }

  /**
   * Método que permite agregar una elemento al final de la lista
   * @param element Elemento a añadir
   * @returns Retorna la lista con el nuevo elemento
   */
  push(element: T) {
    this.elements_[this.length()] = element;
    return this.elements_;
  }

  /**
   * Método que permite añadir al final de una lista otra lista. 
   * @param otherCollection Lista a añadir
   * @returns Lista actual modificada. 
   */
  append(otherCollection: Collection<T>) {
    const collection = otherCollection.elements;
    for (let i = 0; i < otherCollection.length(); ++i) {
      this.push(collection[i]);
    }
    return this.elements_;
  }

  /**
   * Método para obtener el tamaño de la lista.
   * @returns Tamaño de la lista. 
   */
  length() {
    let i = 0;
    while (this.elements_[i] !== undefined) {
      ++i;
    }
    return i;
  }

  /**
   * Método para obtener un elemento según su índice.
   * @param index Índice del elemento
   * @returns Elemento retornado
   */
  at(index: number): T | undefined {
    if (index >= 0 && index <= this.length()) {
      return this.elements_[index];
    }
    return undefined;
  }

  /**
   * Método que permite obtener una nueva lista como unión de otras.
   * @param otherCollections Otras listas a añadir a la actual. 
   * @returns Nueva lista resutlante.
   */
  concatenate(...otherCollections: Collection<T>[]) {
    const result = new Collection<T>(this.elements);
    let i = 0;
    while (otherCollections[i] !== undefined) {
      result.append(otherCollections[i]);
      ++i;
    }
    return result;
  } 

  /**
   * Método que permite obtener una lista con los elementos que cumplan un predicado lógico.
   * @param callback_function Función del predicado lógico
   * @returns Nueva lista.
   */
  filter(callback_function: (element: T) => boolean) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      if (callback_function(this.elements_[i])) {
        result.push(this.elements_[i]);
      }
    }
    return result;
  }

  /**
   * Método que permite obtener una nueva lista resultante de aplicar una función a los elementos actuales de la lista
   * @param callback_function Función callback a aplicar 
   * @returns Nueva lista resultante
   */
  map(callback_function: (item: T) => T) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      result.push(callback_function(this.elements_[i]));
    } 
    return result;
  }

  /**
   * Método que dada una lista, una función y un acumulador inicial, 
   * reduce cada elemento al acumulador utilizando la función
   * @param callback_function Función callback
   * @param initial Valor inicial
   * @returns Nueva lista
   */
  reduce(callback_function: (acumulador: T, item: T) => T, initial: T) {
    for(let i = 0; i < this.length(); ++i) {
      initial = callback_function(initial, this.elements_[i]);
    } 
    return initial;
  }

  /**
   * Método que permite obtener la lista inversa a una dada. 
   * @returns Nueva lista resultante
   */
  reverse() {
    const result = new Collection<T>([]);
    for(let i = this.length(); i >= 0; --i) {
      result.push(this.elements_[i]);
    }
    return result;
  }

  /**
   * Método que permite recorrer la lista
   * @param callback_function Función de callback 
   */
  forEach(callback_function: (element: T) => void) {
    for(let i = 0; i < this.length(); ++i) {
      callback_function(this.elements_[i]);
    } 
  }

}