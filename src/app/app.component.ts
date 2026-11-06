import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
// 1. Importamos la función addIcons y los iconos que vayas a utilizar
import { addIcons } from 'ionicons';
import { settingsOutline, trash, create } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // 2. Registramos los iconos en el constructor para que estén disponibles globalmente[cite: 702, 703]
    addIcons({ 
      settingsOutline, 
      trash, 
      create 
    });
  }
}