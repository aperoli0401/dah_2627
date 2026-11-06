import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { TaskItemComponent } from '../components/libro-item/libro-item.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonButtons,
    IonIcon,
    TaskItemComponent,
    HeaderComponent
  ]
})
export class HomePage {
  listaDeLibros = [
    { id: 1, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', genero: 'Novela', anioPublicacion: 1605, paginas: 863, descripcion: 'Obra cumbre de la literatura española.', completado: true, puntuacion: 5, imagen: 'assets/quijote.jpg', destacado: true },
    { id: 2, titulo: '1984', autor: 'George Orwell', genero: 'Distopía', anioPublicacion: 1949, paginas: 328, descripcion: 'Novela de ciencia ficción distópica.', completado: false, puntuacion: 4, imagen: 'assets/1984.jpg', destacado: false },
    { id: 3, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', anioPublicacion: 1967, paginas: 417, descripcion: 'La historia de la familia Buendía.', completado: false, puntuacion: 5, imagen: 'assets/cien_anos.jpg', destacado: true },
    { id: 4, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', genero: 'Fábula', anioPublicacion: 1943, paginas: 96, descripcion: 'Un pequeño príncipe viaja por el universo.', completado: false, puntuacion: 5, imagen: 'assets/principito.jpg', destacado: true },
    { id: 5, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', genero: 'Novela', anioPublicacion: 1960, paginas: 281, descripcion: 'Injusticia racial en el sur profundo.', completado: false, puntuacion: 4, imagen: 'assets/ruisenor.jpg', destacado: false },
    { id: 6, titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Novela', anioPublicacion: 1925, paginas: 180, descripcion: 'La vida de la alta sociedad en los años 20.', completado: false, puntuacion: 4, imagen: 'assets/gatsby.jpg', destacado: false },
    { id: 7, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', genero: 'Romance', anioPublicacion: 1813, paginas: 432, descripcion: 'Costumbres y relaciones en la sociedad británica.', completado: false, puntuacion: 5, imagen: 'assets/orgullo.jpg', destacado: false },
    { id: 8, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', genero: 'Novela psicológica', anioPublicacion: 1866, paginas: 671, descripcion: 'Dilemas morales tras cometer un crimen.', completado: false, puntuacion: 5, imagen: 'assets/crimen.jpg', destacado: true },
    { id: 9, titulo: 'La Odisea', autor: 'Homero', genero: 'Épica', anioPublicacion: -800, paginas: 448, descripcion: 'El largo viaje de regreso a casa de Odiseo.', completado: false, puntuacion: 4, imagen: 'assets/odisea.jpg', destacado: false },
    { id: 10, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', genero: 'Ciencia ficción', anioPublicacion: 1953, paginas: 158, descripcion: 'Un mundo donde los libros están prohibidos.', completado: false, puntuacion: 4, imagen: 'assets/fahrenheit.jpg', destacado: false },
    { id: 11, titulo: 'Moby Dick', autor: 'Herman Melville', genero: 'Aventura', anioPublicacion: 1851, paginas: 635, descripcion: 'La obsesiva caza de una ballena blanca.', completado: false, puntuacion: 3, imagen: 'assets/mobydick.jpg', destacado: false },
    { id: 12, titulo: 'La metamorfosis', autor: 'Franz Kafka', genero: 'Novela corta', anioPublicacion: 1915, paginas: 96, descripcion: 'Gregor Samsa despierta convertido en insecto.', completado: false, puntuacion: 4, imagen: 'assets/metamorfosis.jpg', destacado: false },
    { id: 13, titulo: 'El hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasía', anioPublicacion: 1937, paginas: 310, descripcion: 'La aventura de Bilbo Bolsón.', completado: false, puntuacion: 5, imagen: 'assets/hobbit.jpg', destacado: true },
    { id: 14, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', genero: 'Misterio', anioPublicacion: 2001, paginas: 576, descripcion: 'Un cementerio de libros olvidados en Barcelona.', completado: false, puntuacion: 5, imagen: 'assets/sombra.jpg', destacado: true },
    { id: 15, titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', genero: 'Ciencia ficción', anioPublicacion: 2008, paginas: 374, descripcion: 'Supervivencia en un reality mortal.', completado: false, puntuacion: 4, imagen: 'assets/juegos.jpg', destacado: false },
    { id: 16, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', genero: 'Fantasía', anioPublicacion: 1997, paginas: 254, descripcion: 'Inicio de la magia en Hogwarts.', completado: false, puntuacion: 5, imagen: 'assets/hp1.jpg', destacado: true },
    { id: 17, titulo: 'El código Da Vinci', autor: 'Dan Brown', genero: 'Suspenso', anioPublicacion: 2003, paginas: 656, descripcion: 'Un misterio oculto en obras de arte.', completado: false, puntuacion: 3, imagen: 'assets/davinci.jpg', destacado: false },
    { id: 18, titulo: 'Drácula', autor: 'Bram Stoker', genero: 'Terror', anioPublicacion: 1897, paginas: 418, descripcion: 'El clásico vampiro de Transilvania.', completado: false, puntuacion: 4, imagen: 'assets/dracula.jpg', destacado: false },
    { id: 19, titulo: 'Frankenstein', autor: 'Mary Shelley', genero: 'Ciencia ficción', anioPublicacion: 1818, paginas: 280, descripcion: 'La creación de vida y sus consecuencias.', completado: false, puntuacion: 4, imagen: 'assets/frankenstein.jpg', destacado: false },
    { id: 20, titulo: 'Los miserables', autor: 'Victor Hugo', genero: 'Novela histórica', anioPublicacion: 1862, paginas: 1463, descripcion: 'Redención y justicia en la Francia del siglo XIX.', completado: false, puntuacion: 5, imagen: 'assets/miserables.jpg', destacado: false },
    { id: 21, titulo: 'La llamada de lo salvaje', autor: 'Jack London', genero: 'Aventura', anioPublicacion: 1903, paginas: 172, descripcion: 'La vida de un perro en el Yukón.', completado: false, puntuacion: 4, imagen: 'assets/salvaje.jpg', destacado: false },
    { id: 22, titulo: 'Pedro Páramo', autor: 'Juan Rulfo', genero: 'Realismo mágico', anioPublicacion: 1955, paginas: 132, descripcion: 'Un pueblo lleno de ecos y fantasmas.', completado: false, puntuacion: 4, imagen: 'assets/paramo.jpg', destacado: false },
    { id: 23, titulo: 'La casa de los espíritus', autor: 'Isabel Allende', genero: 'Realismo mágico', anioPublicacion: 1982, paginas: 448, descripcion: 'Saga familiar en Chile.', completado: false, puntuacion: 4, imagen: 'assets/espiritus.jpg', destacado: false },
    { id: 24, titulo: 'El psicoanalista', autor: 'John Katzenbach', genero: 'Suspenso', anioPublicacion: 2002, paginas: 464, descripcion: 'Un juego psicológico mortal de venganza.', completado: false, puntuacion: 4, imagen: 'assets/psicoanalista.jpg', destacado: false },
    { id: 25, titulo: 'El Alquimista', autor: 'Paulo Coelho', genero: 'Ficción', anioPublicacion: 1988, paginas: 192, descripcion: 'Un viaje en busca de un tesoro personal.', completado: false, puntuacion: 3, imagen: 'assets/alquimista.jpg', destacado: false },
    { id: 26, titulo: 'Ensayo sobre la ceguera', autor: 'José Saramago', genero: 'Novela', anioPublicacion: 1995, paginas: 326, descripcion: 'Una epidemia de ceguera blanca asola una ciudad.', completado: false, puntuacion: 5, imagen: 'assets/ceguera.jpg', destacado: true },
    { id: 27, titulo: 'La tregua', autor: 'Mario Benedetti', genero: 'Novela romántica', anioPublicacion: 1960, paginas: 184, descripcion: 'El diario íntimo de un hombre solitario.', completado: false, puntuacion: 4, imagen: 'assets/tregua.jpg', destacado: false },
    { id: 28, titulo: 'Los renglones torcidos de Dios', autor: 'Torcuato Luca de Tena', genero: 'Misterio', anioPublicacion: 1979, paginas: 456, descripcion: 'Una investigadora en un sanatorio mental.', completado: false, puntuacion: 5, imagen: 'assets/renglones.jpg', destacado: true },
    { id: 29, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', genero: 'Filosófica', anioPublicacion: 1890, paginas: 254, descripcion: 'Un cuadro que envejece mientras su dueño no.', completado: false, puntuacion: 4, imagen: 'assets/dorian.jpg', destacado: false },
    { id: 30, titulo: 'El perfume', autor: 'Patrick Süskind', genero: 'Suspenso', anioPublicacion: 1985, paginas: 256, descripcion: 'La obsesión olfativa de un asesino en Francia.', completado: false, puntuacion: 4, imagen: 'assets/perfume.jpg', destacado: false }
  ];

  constructor() {
    addIcons({ settingsOutline });
  }
}