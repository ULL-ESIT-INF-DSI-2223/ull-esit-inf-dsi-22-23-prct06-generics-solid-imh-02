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

export interface Collectable<T> {
    /**
     * Método para añadir un item
     * @param item Item a añadir
     */
    addItem(item: T): T[];
    
    /**
     * Método para obtener un item
     * @param index índice del item a obtener 
     */
    getItem(index: number): T | undefined;

    /**
     * Método para eliminar un item
     * @param index índice del elemento a eliminar
     */
    removeItem(index: number): T | undefined;

    /**
     * Método para obtener el número de elementos 
     */
    getNumberOfItems(): number;
}