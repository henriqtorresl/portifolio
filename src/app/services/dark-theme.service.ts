import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

  // salvar o darkMode na cache do navegador...
  private darkTheme: boolean = false;

  constructor() { }

  toogleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
    const className: string = 'dark-mode';

    if (this.darkTheme) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }

  isDarkMode(): boolean {
    return this.darkTheme;
  }

}