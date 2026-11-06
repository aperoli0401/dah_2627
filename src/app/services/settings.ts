import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private darkMode: boolean = false;

  constructor() {}

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(enable: boolean) {
    this.darkMode = enable;
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkMode() {
    this.setDarkMode(!this.darkMode);
  }
}