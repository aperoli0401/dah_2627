export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  anioPublicacion: number;
  paginas: number;
  descripcion: string;
  completado: boolean;
  puntuacion: number; // De 0 a 5
  imagen: string;
  destacado?: boolean; // Nueva propiedad añadida
}