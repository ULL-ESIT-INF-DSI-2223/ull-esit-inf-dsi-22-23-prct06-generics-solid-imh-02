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

export class Collection<T> {
  constructor (private elements_: T[]) {

  }

  get elements() {
    return this.elements_;
  }

  push(element: T) {
    this.elements_[this.length()] = element;
    return this.elements_;
  }

  append(otherCollection: Collection<T>) {
    const collection = otherCollection.elements;
    for (let i = 0; i < otherCollection.length(); ++i) {
      this.push(collection[i]);
    }
    return this.elements_;
  }

  length() {
    let i = 0;
    while (this.elements_[i] !== undefined) {
      ++i;
    }
    return i;
  }

  at(index: number): T | undefined {
    if (index >= 0 && index <= this.length()) {
      return this.elements_[index];
    }
    return undefined;
  }

  concatenate(...otherCollections: Collection<T>[]) {
    const result = new Collection<T>(this.elements);
    let i = 0;
    while (otherCollections[i] !== undefined) {
      result.append(otherCollections[i]);
      ++i;
    }
    return result;
  } 

  filter(callback_function: (element: T) => boolean) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      if (callback_function(this.elements_[i])) {
        result.push(this.elements_[i]);
      }
    }
    return result;
  }


  map(callback_function: (item: T) => T) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      result.push(callback_function(this.elements_[i]));
    } 
    return result;
  }

  reduce(callback_function: (acumulador: T, item: T) => T, initial: T) {
    for(let i = 0; i < this.length(); ++i) {
      initial = callback_function(initial, this.elements_[i]);
    } 
    return initial;
  }

  reverse() {
    const result = new Collection<T>([]);
    for(let i = this.length(); i >= 0; --i) {
      result.push(this.elements_[i]);
    }
    return result;
  }

  forEach(callback_function: (element: T) => void) {
    for(let i = 0; i < this.length(); ++i) {
      callback_function(this.elements_[i]);
    } 
  }

}