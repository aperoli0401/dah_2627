import { Component, Input } from '@angular/core';
import { Libro } from '../../interfaces/libros';

// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/angular';
// 2. Importamos CommoModule para poder usar directivas como [clas.tachado]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './libro-item.component.html',
  styleUrls: ['./libro-item.component.scss'],
  standalone: true, 
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel, IonButton] // 3. Registramos los módulos y compnentes en el array 'imports'
})
export class TaskItemComponent {

  @Input() libros: any;
  
  constructor() { }

  mostrarDetalles() {
    console.log('Datos del libro:', this.libros);
  }

}
