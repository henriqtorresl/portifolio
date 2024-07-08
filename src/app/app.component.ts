import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from './services/dark-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private darkThemeService: DarkThemeService
  ) {}

  ngOnInit(): void {
    this.defineTheme();
  }

  defineTheme(): void {
    const theme: string | null = localStorage.getItem('theme');

    if (theme == 'dark') {
      this.darkThemeService.toogleDarkTheme();
    }
  }
}
