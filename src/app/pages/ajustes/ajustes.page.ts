import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonBackButton, IonList, IonListHeader, 
  IonItem, IonLabel, IonToggle 
} from '@ionic/angular';
import { SettingsService } from '../../services/settings.services';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonBackButton,
    IonList, IonListHeader, IonItem, IonLabel, IonToggle,
    CommonModule, FormsModule
  ]
})
export class AjustesPage {

  constructor(public settingsService: SettingsService) { }

  onToggleChange(event: any) {
    const isChecked = event.detail.checked;
    this.settingsService.setDarkMode(isChecked);
  }

}