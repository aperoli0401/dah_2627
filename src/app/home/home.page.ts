import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { Libro } from '../interfaces/libro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  // Declaramos 'biblioteca' como una propiedad de la clase HomePage (sin let)
    listadelibros: Libro[] = [
      {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    genero: 'Realismo mágico',
    anioPublicacion: 1967,
    imagen: 'https://picsum.photos/seed/libro1/200/300'
  },
  {
    id: 2,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    genero: 'Novela',
    anioPublicacion: 1605,
    imagen: 'https://picsum.photos/seed/libro2/200/300'
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Ciencia ficción',
    anioPublicacion: 1949,
    imagen: 'https://picsum.photos/seed/libro3/200/300'
  },
  {
    id: 4,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'Fábula',
    anioPublicacion: 1943,
    imagen: 'https://picsum.photos/seed/libro4/200/300'
  },
  {
    id: 5,
    titulo: 'Crimen y castigo',
    autor: 'Fiódor Dostoyevski',
    genero: 'Novela psicológica',
    anioPublicacion: 1866,
    imagen: 'https://picsum.photos/seed/libro5/200/300'
  },
  {
    id: 6,
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    genero: 'Novela romántica',
    anioPublicacion: 1813,
    imagen: 'https://picsum.photos/seed/libro6/200/300'
  },
  {
    id: 7,
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    genero: 'Misterio',
    anioPublicacion: 2001,
    imagen: 'https://picsum.photos/seed/libro7/200/300'
  },
  {
    id: 8,
    titulo: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    genero: 'Ciencia ficción',
    anioPublicacion: 1953,
    imagen: 'https://picsum.photos/seed/libro8/200/300'
  },
  {
    id: 9,
    titulo: 'Los juegos del hambre',
    autor: 'Suzanne Collins',
    genero: 'Distopía',
    anioPublicacion: 2008,
    imagen: 'https://picsum.photos/seed/libro9/200/300'
  },
  {
    id: 10,
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    genero: 'Fantasía',
    anioPublicacion: 1997,
    imagen: 'https://picsum.photos/seed/libro10/200/300'
  },
  {
    id: 11,
    titulo: 'El Señor de los Anillos: La Comunidad del Anillo',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasía épica',
    anioPublicacion: 1954,
    imagen: 'https://picsum.photos/seed/libro11/200/300'
  },
  {
    id: 12,
    titulo: 'La metamorfosis',
    autor: 'Franz Kafka',
    genero: 'Novela corta',
    anioPublicacion: 1915,
    imagen: 'https://picsum.photos/seed/libro12/200/300'
  },
  {
    id: 13,
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    genero: 'Suspenso',
    anioPublicacion: 2003,
    imagen: 'https://picsum.photos/seed/libro13/200/300'
  },
  {
    id: 14,
    titulo: 'Drácula',
    autor: 'Bram Stoker',
    genero: 'Terror',
    anioPublicacion: 1897,
    imagen: 'https://picsum.photos/seed/libro14/200/300'
  },
  {
    id: 15,
    titulo: 'Frankenstein',
    autor: 'Mary Shelley',
    genero: 'Ciencia ficción / Terror',
    anioPublicacion: 1818,
    imagen: 'https://picsum.photos/seed/libro15/200/300'
  },
  {
    id: 16,
    titulo: 'Los hombres que no amaban a las mujeres',
    autor: 'Stieg Larsson',
    genero: 'Novela negra',
    anioPublicacion: 2005,
    imagen: 'https://picsum.photos/seed/libro16/200/300'
  },
  {
    id: 17,
    titulo: 'Rayuela',
    autor: 'Julio Cortázar',
    genero: 'Novela experimental',
    anioPublicacion: 1963,
    imagen: 'https://picsum.photos/seed/libro17/200/300'
  },
  {
    id: 18,
    titulo: 'Pedro Páramo',
    autor: 'Juan Rulfo',
    genero: 'Realismo mágico',
    anioPublicacion: 1955,
    imagen: 'https://picsum.photos/seed/libro18/200/300'
  },
  {
    id: 19,
    titulo: 'La casa de los espíritus',
    autor: 'Isabel Allende',
    genero: 'Realismo mágico',
    anioPublicacion: 1982,
    imagen: 'https://picsum.photos/seed/libro19/200/300'
  },
  {
    id: 20,
    titulo: 'El retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    genero: 'Filosófica',
    anioPublicacion: 1890,
    imagen: 'https://picsum.photos/seed/libro20/200/300'
  },
  {
    id: 21,
    titulo: 'Los Miserables',
    autor: 'Victor Hugo',
    genero: 'Novela histórica',
    anioPublicacion: 1862,
    imagen: 'https://picsum.photos/seed/libro21/200/300'
  },
  {
    id: 22,
    titulo: 'Matar a un ruiseñor',
    autor: 'Harper Lee',
    genero: 'Drama',
    anioPublicacion: 1960,
    imagen: 'https://picsum.photos/seed/libro22/200/300'
  },
  {
    id: 23,
    titulo: 'El gran Gatsby',
    autor: 'F. Scott Fitzgerald',
    genero: 'Tragedia',
    anioPublicacion: 1925,
    imagen: 'https://picsum.photos/seed/libro23/200/300'
  },
  {
    id: 24,
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'Aventura',
    anioPublicacion: 1851,
    imagen: 'https://picsum.photos/seed/libro24/200/300'
  },
  {
    id: 25,
    titulo: 'Los pilares de la tierra',
    autor: 'Ken Follett',
    genero: 'Novela histórica',
    anioPublicacion: 1989,
    imagen: 'https://picsum.photos/seed/libro25/200/300'
  },
  {
    id: 26,
    titulo: 'El perfume',
    autor: 'Patrick Süskind',
    genero: 'Suspense psicológico',
    anioPublicacion: 1985,
    imagen: 'https://picsum.photos/seed/libro26/200/300'
  },
  {
    id: 27,
    titulo: 'La naranja mecánica',
    autor: 'Anthony Burgess',
    genero: 'Ciencia ficción distópica',
    anioPublicacion: 1962,
    imagen: 'https://picsum.photos/seed/libro27/200/300'
  },
  {
    id: 28,
    titulo: 'Ensayo sobre la ceguera',
    autor: 'José Saramago',
    genero: 'Novela psicológica',
    anioPublicacion: 1995,
    imagen: 'https://picsum.photos/seed/libro28/200/300'
  },
  {
    id: 29,
    titulo: 'Los viajes de Gulliver',
    autor: 'Jonathan Swift',
    genero: 'Sátira',
    anioPublicacion: 1726,
    imagen: 'https://picsum.photos/seed/libro29/200/300'
  },
  {
    id: 30,
    titulo: 'El alquimista',
    autor: 'Paulo Coelho',
    genero: 'Novela de aventuras',
    anioPublicacion: 1988,
    imagen: 'https://picsum.photos/seed/libro30/200/300'
  }
    ]
    constructor(){}
}
