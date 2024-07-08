import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

  private darkTheme: boolean = false;

  constructor() { }

  toogleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
    const className: string = 'dark-mode';

    if (this.darkTheme) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add(className);
    } else {
      localStorage.setItem('theme', 'ligth');
      document.body.classList.remove(className);
    }
  }

  isDarkMode(): boolean {
    return this.darkTheme;
  }

}