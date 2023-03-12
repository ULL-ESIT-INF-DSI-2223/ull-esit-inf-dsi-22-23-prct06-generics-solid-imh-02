# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

Ismael Martín Herrera *alu0101397375@ull.edu.es*

## índice 

1. [Introducción](#introducción)
2. [Instalación y configuración de Instanbul y Coveralls](#istanbul)
3. [Ejercicio 1](#ejercicio-1)
4. [Ejercicio 2](#ejercicio-2)
5. [Ejercicio 3](#ejercicio-3)
6. [Ejercicio modificación](#ejercicio-modificación)
7. [Conclusión](#conclusión)
8. [Referencias](#referencias)

## Introducción 

En esta pŕactica 6 se hace uso de las clases e interfaces genéricas en TypeScript. Asimismo, también se hace uso los principios SOLID para el desarrollo de la misma. Finalmente, cabe destacar que en esta práctica también he agregado dos nuevas herramientas de desarrollo, en primer lugar, [Instanbul](https://istanbul.js.org/) para gestionar el cubrimiento de pruebas del desarrollo. Y en segundo lugar, [Coveralls](https://coveralls.io/). 

## Instalación y configuración de Instanbul y Coveralls 

Tal y como he expuesto previamente en esta práctica he incorporado dos nuevas herramientas para el desarrollo.

Para la incorporación de ambas herramientas he seguido los pasos expuestos en el vídeo de referencia en el campus virtual. 

### Instanbul

Instalación de dependencias: ```npm install --save-dev nyc coveralls```
Adición de script en el fichero ```package.json```, añadiendo la línea: ```"coverage": "nyc npm test"```, para la generación del correspondiente informe de cubrimiento. 

## Ejercicio 1

En este primer ejercicio se pedía desarrollar el modelo de datos de una plataforma de streaming. En este sentido, en primer lugar he considerado crear un conjunto de interfaces que definen los métodos que debería tener el catálogo. Para ello he creado cuatro interfaces diferenciadas, esto se justifica por el principio de segregación de interfaz, asimismo, permite que en una clase futura se pueda seleccionar cuales de ellas implementar. 

Por un lado, he desarrollado la interfaz ```Streamable<T>```, esta determina que toda la clase que la implemente deberá tener una método para añadir elementos a la colección ```addElement()```. Asimismo, también deberá tener otro método que permita conocer el número de elementos de la colección ```getNumberElements()```. Y finalmente, un getter ```Elements()``` que devuelva toda la colección, lo cual puede facilitar la realización de ciertas operaciones. 

```ts
export interface Streamable<T> {
  addElement(input: T): void;
  getNumberElements(): number;
  get Elements(): T[];
}
```

Por otro lado, otra de las interfaces es ```StreamableSearchName<T>```, que determina que toda clase que la implementen deben tener un método ```searchName()```, que permita buscar una película, documental o serie, en este caso, por su nombre. 

```ts
export interface StreamableSearchName<T> {
  searchName(name: string): T | undefined;
}
```

Además de las dos interfaces anteriores, también he desarrollado dos interfaces más ```StreamableSearchCategories<T>``` que establece un método para buscar un elemento por su categoría, en este caso categoría de serie, película o documental. Y, ```StreamableSearchYear<T>``` que establece un método para buscar un elemento por el año del mismo, en el caso concreto de la práctica, el año de producción de una serie, película o documental. 

```ts
export interface StreamableSearchCategories<T> {
  searchCategories(category: string): T[] | undefined;
}

export interface StreamableSearchYear<T> {
  searchYear(year: number): T[] | undefined;
}
```

Por otra parte, en este ejercicio también se pedía el desarrollo de una clase abstracta genérica ```BasicStreamableCollection<T>```, esta clase implementa todas las interfaces genéricas expuestas previamente, y sirve de base para cada una de las colecciones específicas. En este punto, en esta clase, se define como propiedad ```private``` el array de tipo T que se usará por las colecciones específicas. Asimismo, también he implementado los tres métodos relacionados directamente con dicho array, ```addElement()```, para añadir elementos a la colección. ```getNumberElements()```, que permite obtener el número de elementos del array, y por consiguiente de la colección y el getter de la colección. Finalmente, cabe destacar que el resto de métodos ```searchName()```, ```searchCategories()```, ```searchYear()```, los he marcado como ```abstract```, para implementarlos en las subclases específicas. 

```ts
export abstract class BasicStreamableCollection<T>
  implements
    Streamable<T>,
    StreamableSearchCategories<T>,
    StreamableSearchName<T>,
    StreamableSearchYear<T> {

  /**
   * Permite crear el array de elementos
   * @param elements Array de elementos
   */
  constructor (private elements: T[]) {
  }

  /**
   * Método que permite añadir una elemento a la colección
   * @param input Elemento a añadir a la colección
   */
  addElement(input: T): void {
    this.elements.push(input);
  }

  /**
   * Método para obtener el número de elementos de la colección
   * @returns Retorna el número de elementos de la colección
   */
  getNumberElements(): number {
    return this.elements.length;
  }

  /**
   * Método para obtener la colección entera de elementos
   */
  get Elements(): T[] {
    return this.elements;
  }

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por nombre
   * @param name Nombre del elemento a buscar
   */
  abstract searchName(name: string): T | undefined;

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por categoría
   * @param category Categoría del elemento a buscar
   */
  abstract searchCategories(category: string): T[] | undefined;

  /**
   * Método a definir en las subclases, y que permite buscar un elemento por año
   * @param year Año del elemento a buscar
   */
  abstract searchYear(year: number): T[] | undefined;
}
```

A continuación, he implementado tres clases específicas para albergar la información de cada uno de los elementos del catálogo de la plataforma, las clases ```Serie```, ```Película``` y ```Documental```. 

Respecto a las clases ```Serie``` y ```Documental```, en ambas he definido las mismas propiedades ```private```: 

- Name: nombre de la serie o documental. 
- Categories: categorías en las que clasifica la serie o el documental. 
- Year: año de producción de la serie o documental. 

```ts
export class Documental {
  /**
   * Constructor que determina las propiedades de un documental
   * @param name_ Nombre del documental
   * @param categories_ Categorías del documental
   * @param year_ Año del documental
   */
  constructor (private name_: string, private categories_: string[], private year_: number) {

  }

  /**
   * Getter del nombre de un documental
   */
  get name() {
    return this.name_;
  }

  /**
   * Getter de las categorías de un documental
   */
  get categories() {
    return this.categories_;
  }

  /**
   * Getter del año de un documental
   */
  get year () {
    return this.year_;
  }
}
```

```ts
export class Serie {

  /**
   * Constructor que determina las propiedades de una serie 
   * @param name_ Nombre de la serie
   * @param categories_ Categorías de la serie
   * @param year_ Año de la serie
   */
  constructor (private name_:string, private categories_: string[], private year_: number) {

  }


  /**
   * Getter del nombre de una serie
   */
  get name() {
    return this.name_;
  }

  /**
   * Getter de las categorías de una serie
   */
  get categories() {
    return this.categories_;
  }

    /**
   * Getter del año de un serie
   */
  get year () {
    return this.year_;
  }
}
```

Asimismo, cabe reseñar que ambas clases basan su funcionamiento en una serie de expectativas cuyos resultados son los siguientes: 

```
Getters de la clase documental
    ✔ Getter del nombre de animales1 resulta 'Animales1' 
    ✔ Getter de las categorías de animales1 resulta ['sabana', 'selva']
    ✔ Getter del año de animales1 resulta 2021

  Getters de la clase serie
    ✔ Getter del nombre de loki resulta 'Loki' 
    ✔ Getter de las categorías de loki resulta ['ciencia ficción', 'superhéroes']
    ✔ Getter del año de loki resulta 2021

```

Por otra parte, en cuanto a la clase ```Película``` he añadido una propiedad más que en las anteriores, ```countries_```, es decir, el país de rodaje de la misma. Además, he implementado también el correspondiente el getter ```countries()```. 


```ts
export class Pelicula {
    /**
   * Constructor que determina las propiedades de una Película 
   * @param name_ Nombre de la película
   * @param categories_ Categorías de la película 
   * @param year_ Año de la película 
   * @param countries_ Países de la película
   */
  constructor (private name_: string, private categories_: string[], private year_: number, private countries_: string[]) {

  }

  /**
   * Getter del nombre de una película
   */
  get name() {
    return this.name_;
  }

  /**
   * Getter de las categorías de una película 
   */
  get categories() {
    return this.categories_;
  }

  /**
   * Getter del año de una película
   */
  get year () {
    return this.year_;
  }

  /**
   * Getter de los países de una película 
   */
  get countries() {
    return this.countries_;
  }
}
```

Esta clase basa su funcionamiento en una serie de expectativas cuyos resultados son los siguientes: 

```
  Getters de la clase Pelicula
    ✔ Getter del nombre de AntMan resulta 'Ant-Man' 
    ✔ Getter de las categorías de Ant-Man resulta ['acción', 'superhéroes']
    ✔ Getter del año de Ant-Man resulta 2023
    ✔ Getter de los países de rodaje de Ant-Man resulta ['EEUU', 'Turquía']
```

En cuanto a las colecciones específicas he desarrollado tres subclases que extienden a la clase ```BasicStreamableCollection```. 

En primer lugar, cabe destacar las clases ```DocumentalCollection``` y ```SeriesCollection```, en ambas realizo una implementación específica de los diferentes métodos de búsqueda que se contemplaban en la clase base:  ```searchCategories```, ```searchName``` y ```searchYear```. 

```ts
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(seriesList: Serie[]) {
    super(seriesList);
  }
  
  searchCategories(category: string): Serie[] | undefined {
    const result: Serie[] = [];
    this.Elements.forEach((serie) => {
      serie.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(serie);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchName(name: string): Serie | undefined {
    let serie_aux: Serie = new Serie("", [], 0);
    let flag = false;
    this.Elements.forEach((serie) => {
      if (serie.name === name) {
        serie_aux = serie;
        flag = true;
      }
    });
    if (flag !== false) {
      return serie_aux;
    }
    return undefined;
  }

  searchYear(year: number): Serie[] | undefined {
    const result: Serie[] = [];
    this.Elements.forEach((serie) => {
      if(serie.year === year) {
        result.push(serie);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

}
```

```ts
export class DocumentalCollection extends BasicStreamableCollection<Documental> {

  /**
   * Contructor de la colección de documentales
   * @param documentalList Colección de documentales
   */
  constructor(documentalList: Documental[]) {
    super(documentalList);
  }
  
  /**
   * Método para buscar un documental por su categoría
   * @param category Categoría para buscar documentales
   * @returns Devuelve una lista de documentales o undefined si la categoría no existe
   */
  searchCategories(category: string): Documental[] | undefined {
    const result: Documental[] = [];
    this.Elements.forEach((Documental) => {
      Documental.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(Documental);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  /**
   * Método para buscar un documental por nombre
   * @param name Nombre del documental a buscar
   * @returns Retorna el documental si lo encuentra o undefined en caso de no encontrarlo
   */
  searchName(name: string): Documental | undefined {
    let Documental_aux: Documental = new Documental("", [], 0);
    let flag = false;
    this.Elements.forEach((Documental) => {
      if (Documental.name === name) {
        Documental_aux = Documental;
        flag = true;
      }
    });
    if (flag !== false) {
      return Documental_aux;
    }
    return undefined;
  }

  /**
   * Método para buscar documentales por año
   * @param year Año para buscar documentales 
   * @returns Retorna una lista de documentales o undefined en caso de no existir el año
   */
  searchYear(year: number): Documental[] | undefined {
    const result: Documental[] = [];
    this.Elements.forEach((Documental) => {
      if(Documental.year === year) {
        result.push(Documental);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

}
```

Las dos clases expuestas previamente basan su funcionamiento en unas expectativas cuyos resultados son los siguientes: 

```
  Métodos de una colección de documentales
    ✔ Obtener el número de documentales, resulta 3
    ✔ Buscar por nombre 'Animales1' resulta animales1
    ✔ Buscar por nombre 'Animales4' resulta undefined, porque no está almacenado
    ✔ Buscar por categoria 'sabana' resulta [animales1, animales2]
    ✔ Buscar por categoria 'cocina' resulta undefined
    ✔ Buscar por año 2022 resulta [animales2, animales3]
    ✔ Buscar por año 1999 resulta undefined
  
  Métodos de una colección de series
    ✔ Obtener el número de series almacendas, resulta 3
    ✔ Buscar por nombre Loki resulta Loki
    ✔ Buscar por nombre Squid Games resulta undefined, porque no está almacenada
    ✔ Buscar por categoria 'superhéroes' resulta [loki, moonKnigth]
    ✔ Buscar por categoria 'comedia' resulta undefined
    ✔ Buscar por año 2022 resulta [moonKnigth]
    ✔ Buscar por año 1999 resulta undefined
```

En segundo lugar, respecto a la subclase concreta ```PeliculasCollection```. A diferencia de las dos anteriores, he desarrollado además de los tres métodos de búsqueda expuestos previamente, un método para buscar una película por su país de rodaje ```searchCountry()```. 

```ts
export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  constructor(private peliculasList: Pelicula[]) {
    super(peliculasList);
  }

  searchCategories(category: string): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      Pelicula.categories.forEach((category_) =>{
        if (category === category_) {
          result.push(Pelicula);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchName(name: string): Pelicula | undefined {
    let Pelicula_aux: Pelicula = new Pelicula("", [], 0, []);
    let flag = false;
    this.Elements.forEach((Pelicula) => {
      if (Pelicula.name === name) {
        Pelicula_aux = Pelicula;
        flag = true;
      }
    });
    if (flag !== false) {
      return Pelicula_aux;
    }
    return undefined;
  }

  searchYear(year: number): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      if(Pelicula.year === year) {
        result.push(Pelicula);
      }
    });
    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }

  searchCountry(country: string): Pelicula[] | undefined {
    const result: Pelicula[] = [];
    this.Elements.forEach((Pelicula) => {
      Pelicula.countries.forEach((country_) =>{
        if (country === country_) {
          result.push(Pelicula);
        }
      });
    });

    if (result.length > 0) {
      return result;
    } else {
      return undefined;
    }
  }
}
```

Esta clase basa su funcionamiento en unas expectativas cuyos resultados son los siguientes: 

```
  Métodos de una colección de películas
    ✔ Obtener el número de películas almacenadas, resulta 3
    ✔ Buscar por nombre 'Ant-Man' resulta AntMan
    ✔ Buscar por nombre 'SpiderMan' resulta undefined, porque no está almacenada
    ✔ Buscar por categoria 'súperhéroes' resulta [AntMan, EndGame]
    ✔ Buscar por categoria 'comedia' resulta undefined
    ✔ Buscar por año 2022 resulta [moonKnigth]
    ✔ Buscar por año 1999 resulta undefined
    ✔ Buscar por país EEUU resulta [AntMan, Avatar, EndGame]
    ✔ Buscar por país España resulta undefined
```

## Ejercicio 2

En este segundo ejercicio se pide el desarrollo de una clase genérica que modele una lista de elementos de cualquier tipo y sus correspondientes operaciones. 

El desarrollo de este ejercicio se basa en el siguiente conjunto de expectativas: 

```ts
describe('Operaciones de una colección', () => {
  const numericCollection = new Collection<number>([1,2,3,4,5]);
  const numericCollection2 = new Collection<number>([-1,0]);
  const numericCollection3 = new Collection<number>([2]);
  const numericCollection4 = new Collection<number>([3]);
  const numericCollection5 = new Collection<number>([4]);
  const numericCollection6 = new Collection<number>([4,7,8]);

  it("Método push(6) a numericCollection resulta [1,2,3,4,5,6]", () => {
    expect(numericCollection.push(6)).to.be.eql([1,2,3,4,5,6]);
  });

  it("Método push(10) a numericCollection resulta [1,2,3,4,5,6, 10]", () => {
    expect(numericCollection.push(10)).to.be.eql([1,2,3,4,5,6,10]);
  });

  it("Método length a numericCollection resulta 7", () => {
    expect(numericCollection.length()).to.be.eql(7);
  });
  
  it("Método length a numericCollection2 resulta 2", () => {
    expect(numericCollection2.length()).to.be.eql(2);
  });

  it("Método at(1) a numericCollection resulta 2", () => {
    expect(numericCollection.at(1)).to.be.eql(2);
  });

  it("Método at(7) a numericCollection resulta undefined", () => {
    expect(numericCollection.at(7)).to.be.eql(undefined);
  });

  it("Método getElements() a numericCollection resulta [1,2,3,4,5,6, 10]", () => {
    expect(numericCollection.elements).to.be.eql([1,2,3,4,5,6,10]);
  });

  it("Método append numericCollection y numericCollection2 resulta [1,2,3,4,5,6, 10,-1,0]", () => {
    expect(numericCollection.append(numericCollection2)).to.be.eql([1,2,3,4,5,6,10,-1,0]);
  });
  
  it("Método append numericCollection2 y numericCollection resulta [-1,0,1,2,3,4,5,6,10]", () => {
    expect(numericCollection2.append(numericCollection)).to.be.eql([-1,0,1,2,3,4,5,6,10,-1,0]);
  });

  it("Método concatenate numericCollection3, numericCollection4, numericCollection5 resulta [2,3,4]", () => {
    expect(numericCollection3.concatenate(numericCollection4, numericCollection5)).to.be.eql(new Collection([2,3,4]));
  });

  it("Método filter() para números mayores que 5 de numericCollection6 resulta [7,8]", () => {
    const result = numericCollection6.filter(element => element > 5);
    expect(result).to.be.eql(new Collection([7,8]));
  });


  it("Método filter() para números menores que 0 de numericCollection6 resulta []", () => {
    const result = numericCollection6.filter(element => element < 0);
    expect(result).to.be.eql(new Collection([]));
  });

  it("Método map() para que a todos los elementos se le sume 1 de numericCollection6 resulta [5,8,9]", () => {
    const result = numericCollection6.map(element => element + 1);
    expect(result).to.be.eql(new Collection([5,8,9]));
  });

  it("Método reduce()  con acumulador 2 resulta 448", () => {
    const result = numericCollection6.reduce((acumulador, element) => acumulador * element, 2);
    expect(result).to.be.eql(448);
  });

  it("Método reverse() numericCollection6 resulta [8,7,4]", () => {
    expect(numericCollection6.reverse()).to.be.eql(new Collection([8,7,4]));
  });

  it("Método forEarch() sumando los elementos de numericCollection6 resulta 19", () => {
    let result = 0;
    numericCollection6.forEach(element => result += element);
    expect(result).to.be.eql(19);
  });
});
```

Y cuyo resultado es el siguiente: 

```
  Operaciones de una colección
    ✔ Método push(6) a numericCollection resulta [1,2,3,4,5,6]
    ✔ Método push(10) a numericCollection resulta [1,2,3,4,5,6, 10]
    ✔ Método length a numericCollection resulta 7
    ✔ Método length a numericCollection2 resulta 2
    ✔ Método at(1) a numericCollection resulta 2
    ✔ Método at(7) a numericCollection resulta undefined
    ✔ Método getElements() a numericCollection resulta [1,2,3,4,5,6, 10]
    ✔ Método append numericCollection y numericCollection2 resulta [1,2,3,4,5,6, 10,-1,0]
    ✔ Método append numericCollection2 y numericCollection resulta [-1,0,1,2,3,4,5,6,10]
    ✔ Método concatenate numericCollection3, numericCollection4, numericCollection5 resulta [2,3,4]
    ✔ Método filter() para números mayores que 5 de numericCollection6 resulta [7,8]
    ✔ Método filter() para números menores que 0 de numericCollection6 resulta []
    ✔ Método map() para que a todos los elementos se le sume 1 de numericCollection6 resulta [5,8,9]
    ✔ Método reduce()  con acumulador 2 resulta 448
    ✔ Método reverse() numericCollection6 resulta [8,7,4]
    ✔ Método forEarch() sumando los elementos de numericCollection6 resulta 19
```

En este sentido, en este ejercicio he desarrollado las siguientes operaciones sobre mi lista genérica: 

```push()```

Este método hace uso de una funcionalidad de typescript que permite añadir elementos en una posición de un array, aunque no hubiera nada previamente. 

```ts
  push(element: T) {
    this.elements_[this.length()] = element;
    return this.elements_;
  }
```

```append()```

Para la realización de este método hago uso de otros métodos también desarrollados en este ejercicio, como es el caso de ```length()```, aunque también se podría haber usado el método ```forEach```, que explicaré más adelante. 

```ts
  append(otherCollection: Collection<T>) {
    const collection = otherCollection.elements;
    for (let i = 0; i < otherCollection.length(); ++i) {
      this.push(collection[i]);
    }
    return this.elements_;
  }
```

```length()```

Este método como su nombre indica permite obtener el tamaño de una lista, para ello hago uso de un bucle while, que itera sobre la lista hasta que no queden posiciones definidas y retorna el contador. 

```ts
  length() {
    let i = 0;
    while (this.elements_[i] !== undefined) {
      ++i;
    }
    return i;
  }
```

```at()```

Este método permite el acceso a un elemento de la lista, dada su posición, en este sentido, el método comprueba primero si el índice es válido en cuyo caso se devuelve el elemento. Por el contrario, si no fuera un íncide válido, se retorna ```undefined```. 

```ts
  at(index: number): T | undefined {
    if (index >= 0 && index <= this.length()) {
      return this.elements_[index];
    }
    return undefined;
  }
```

```concatenate()```

Este método permite obtener una nueva lista como unión de otras, para ello recorro el array que genera el parámetro de tipo rest ```...otherCollections: Collection<T>[]``` mediante un bucle while, y hago uso del método ```append()```, expuesto previamente. 

```ts
  concatenate(...otherCollections: Collection<T>[]) {
    const result = new Collection<T>(this.elements);
    let i = 0;
    while (otherCollections[i] !== undefined) {
      result.append(otherCollections[i]);
      ++i;
    }
    return result;
  } 
```

```filter()```

El método filter permite obtener una lista con los elementos que cumplan un predicado lógico. Para ello, implemento la correspondiente función callback, en este caso recorro la lista y mediante un ```if``` compruebo si el predicado se cumple. 

```ts
  filter(callback_function: (element: T) => boolean) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      if (callback_function(this.elements_[i])) {
        result.push(this.elements_[i]);
      }
    }
    return result;
  }
```

```map()```

Este método permite obtener una nueva lista resultante de aplicar una función a los elementos actuales de la lista, para ello recorro la lista y aplico a cada elemento la correspondiente función. 

```ts
  map(callback_function: (item: T) => T) {
    const result = new Collection<T>([]);
    for(let i = 0; i < this.length(); ++i) {
      result.push(callback_function(this.elements_[i]));
    } 
    return result;
  }
```

```reduce()```

Este método permite que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función. Para ello, recorro la lista llamando a la misma con cada elemento, y realizando la operación correspondiente sobre el acumulador. 

```ts
  reduce(callback_function: (acumulador: T, item: T) => T, initial: T) {
    for(let i = 0; i < this.length(); ++i) {
      initial = callback_function(initial, this.elements_[i]);
    } 
    return initial;
  }
```

```reverse()```

Este método permite obtener una lista inversa a otra dada, para ello recorro de manera inversa la lista actual, y mediante el método ```push()```, expuesto previamente, se añaden los elementos a otra lista nueva. 

```ts
  reverse() {
    const result = new Collection<T>([]);
    for(let i = this.length(); i >= 0; --i) {
      result.push(this.elements_[i]);
    }
    return result;
  }
```

```forEach()```

Este permite recorrer la lista actual, para lo que recorro la misma y llamo a la función de callback con cada elemento. 

```ts
  forEach(callback_function: (element: T) => void) {
    for(let i = 0; i < this.length(); ++i) {
      callback_function(this.elements_[i]);
    } 
  }
```

## Ejercicio 3

En el ejercicio 3 se pide revisar si la implementación de la biblioteca musical en la práctica 5 cumple con los principios SOLID, los cuáles tras revisar la misma, considero que los cumple. Asimismo, también se pedía desarrollar una clase single, para diferenciar un single de un disco. Esta nueva clase basa su funcionamiento en unas expectativas, cuyos resultados son los siguientes: 

```
  Getter y setters de un single
    ✔ Getter del nombre, resulta 'Single1' 
    ✔ Getter del año de publicación resulta 2023
    ✔ Getter de las versiones del single
```

```ts
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
```

Por otra parte, se pide la creación de una clase genérica ```Discografia<T>```, que permita que una discografía esté formada por Discos, Singles, o Discos y Singles. Esta nueva clase basa su funcionamiento en una serie de pruebas, cuyo resultado es el siguiente: 

```
  Getter de una discografía
    ✔ Getter de la discografía con un single y un disco
    ✔ Getter de la discografía con un single 
    ✔ Getter de la discografía con un disco 
```

```ts
export class Discografia<T extends Disco | Single> {

  /**
   * Constructor de la clase
   * @param discografia_ Recibe un array de Discos, Singles o Discos y Singles
   */
  constructor(private discografia_: T[]) {

  }

  /**
   * Getter de toda la discografía
   */
  get Discografia() {
    return this.discografia_;
  }
}
```

Cabe destacar que he realizado algunas modificaciones tanto en las clases ```Artista``` y ```BibliotecaMusical```, así como en sus respectivas expectativas. 

## Ejercicio modificación

El enunciado propuesto a modo de modificación es el siguiente, junto con las soluciones propuestas. 

1. Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.

```ts
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
```

2. Implemente una interfaz genérica 'Printable' con los siguientes métodos, los cuales deberá definir toda clase que desee implementar dicha interfaz: print.

```ts
export interface Printable<T> {
    /**
     * Método para imprimir lo que hay en la colección 
     */
    print(): string; 
}
```

3. Implemente una clase abstracta genérica 'PrintableCollection' que implemente las interfaces genéricas 'Collectable' y 'Printable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras que el método print de 'Printable' será abstracto, de modo que aquellas clases que extiendan a 'PrintableCollection' tengan que implementarlo obligatoriamente.

```ts
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
```

4. Extienda la clase abstracta genérica 'PrintableCollection' escribiendo la subclase 'NumericPrintableCollection'. Esta clase deberá modelar una colección de elementos numéricos en la que el método print devolverá la representación en cadena de los números de la colección separados por comas.

```ts
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Método para imprimir la colección 
     * @returns Array en formato string 
     */
    print(): string {
        return this.items_.join();
    }
}
```

Las expectativas en las que basa el código desarrollado anteriormente, resultan lo siguiente: 

```
  Clase NumericPrintableCollection
    ✔ Método add se le pasa 1 y resulta [2,3,9,1]
    ✔ Método getNumberOfItem() resulta 
    ✔ Método print() resulta '2,3,9,1'
    ✔ Método removeItem(-1) resulta undefined
    ✔ Método removeItem(2) resulta 9
    ✔ Método getItem(-1) resulta undefined
    ✔ Método getItem(1) resulta 3
```

5. ¿Qué tendría que hacer para escribir una clase 'StringPrintableCollection' cuyo método print devuelva una única cadena con la concatenación de todas las cadenas de la colección separadas por comas?
6. Pruebe el correcto funcionamiento de la clase 'NumericPrintableCollection' y 'StringPrintableCollection' (si ha llegado a implementarla). Lo anterior debería haberlo hecho ya si ha utilizado TDD/BDD durante su desarrollo.

```ts
export class StringPrintableCollection extends PrintableCollection<string> {
    /**
     * Método para imprimir la colección
     * @returns Colección en formato string
     */
    print(): string {
        return this.items_.join();
    }
    
}
```

Las expectativas en las que basa el código desarrollado anteriormente, resultan lo siguiente: 

```
  Clase StringPrintableCollection
    ✔ Método add '[7,8,9]' y resulta['1,2,3', '4,5,6', '7,8,9']
    ✔ Método getNumberOfItem() resulta 
    ✔ Método removeItem(-1) resulta undefined
    ✔ Método removeItem(2) resulta '7,8,9'
    ✔ Método getItem(-1) resulta undefined
    ✔ Método getItem(1) resulta 3
    ✔ Método print() resulta '1,2,3,4,5,6'
```

## Conclusión

En esta práctica he profundizado en las clases e interfaces genéricas, así como los principios SOLID. En este sentido, quizás destacar que programar siguiendo los principios SOLID, en un principio, cuesta un poco porque tienes que cambiar el modo de pensar a la hora de programa. Sin embargo, por ejemplo en el ejercicio 1 se simplifica bastante el diseño de las interfaces y su implementación posterior, debido a que se divide en cuatro interfaces. 

## Referencias

[Vídeo Instanbul y Coveralls](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view)

[Guión de la práctica 6](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)