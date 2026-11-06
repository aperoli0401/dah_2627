import { Component, Input } from '@angular/core';
import { Libro } from '../../interfaces/libros';

// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonBadge, IonSelect, IonSelectOption} from '@ionic/angular';
// 2. Importamos CommoModule para poder usar directivas como [clas.tachado]
import { CommonModule, UpperCasePipe } from '@angular/common'; // Importamos tambien el UpperCasePipe

@Component({
  selector: 'app-task-item',
  templateUrl: './libro-item.component.html',
  styleUrls: ['./libro-item.component.scss'],
  standalone: true, 
  imports: [CommonModule, IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonBadge, UpperCasePipe, IonSelect, IonSelectOption] // 3. Registramos los módulos y compnentes en el array 'imports'
})
export class TaskItemComponent {

  @Input() libro: Libro | undefined; // Permite manejar casos sin datos
  
  constructor() { }

  mostrarDetalles() {
    if (this.libro) {
      console.log('Datos del libro:', this.libro);
    }
  }

}
