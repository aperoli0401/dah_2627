import { Component } from '@angular/core';
import { Libro } from '../interfaces/libros';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
  ]
})
export class HomePage {
  listaDeLibros: Libro[] = [
    {
      id: 1,
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      genero: "Novela caballeresca",
      anioPublicacion: 1605,
      paginas: 863,
      descripcion: "Las aventuras de un hidalgo que enloquece leyendo libros de caballería.",
      completado: true,
      puntuacion: 5,
      imagen: ""
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción distópica",
      anioPublicacion: 1949,
      paginas: 328,
      descripcion: "Novela política de ficción sobre un régimen totalitario.",
      completado: false,
      puntuacion: 4,
      imagen: ""
    }
  ];

  constructor() {}
}