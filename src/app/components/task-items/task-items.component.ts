import { Component, Input } from '@angular/core';
import { Libro } from '../../interfaces/libros';  
// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/angular/';

// 2. Importamos CommonModule para poder usar directivas como [class.tachado]
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.scss'],
  standalone : true,
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel, IonButton],
})
export class TaskItemsComponent  {

  @Input() libro!: Libro;

  constructor() { }

  mostrarDetalles(){
    console.log('Datos de la tarea:', this.libro);
  }

}
