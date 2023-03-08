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
 *
*/

import {Collectable} from '../ejercicio-modif/collectable'
import {Printable} from '../ejercicio-modif/printable'

/**
 * La clase printablecollection permite almacenar una serie de elementos
 */
export abstract class  PrintableCollection<T> implements Collectable<T>, Printable<T> {
    constructor(protected items_: T[]){

    }

    /**
     * Método print abstracto a implementar en las subclases
     */
    abstract print(): string;

    /**
     * Método para añadir un nuevo item a la colección
     * @param item Item a añadir en la colección
     * @returns Colección, tras haber añadido el nuevo item 
     */
    addItem(item: T): T[] {
        this.items_.push(item);
        return this.items_
    }

    /**
     * Método que permite obtener el item de índice index de la colección
     * @param index índice del item
     * @returns El item solicitado o undefined si el índice no está dentro del rango
     */
    getItem(index: number): T | undefined {
        if (index >= 0 && index < this.items_.length) {
            return this.items_[index];
        }
        return undefined
    }

    /**
     * Método para obtener el número de objetos de la colección 
     * @returns Número de objetos de la colección 
     */
    getNumberOfItems(): number {
        return this.items_.length;
    }

    /**
     * Método para eliminar un elemento de la colección 
     * @param index índice del elemento a elimianr 
     * @returns Elemento eliminado, o undefined en caso de que el índice esté fuera de rango 
     */
    removeItem(index: number): T | undefined {
        if (index >= 0 && index < this.items_.length) {
            const aux_item = this.items_[index];
            this.items_.splice(index);
            return aux_item;
        }
        return undefined
    }
}