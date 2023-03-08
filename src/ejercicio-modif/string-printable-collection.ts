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

import { PrintableCollection } from "./printable-collection";

export class StringPrintableCollection extends PrintableCollection<string> {
    /**
     * Método para imprimir la colección
     * @returns Colección en formato string
     */
    print(): string {
        return this.items_.join();
    }
    
}