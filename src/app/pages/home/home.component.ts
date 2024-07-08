import { Component } from '@angular/core';
import { DarkThemeService } from 'src/app/services/dark-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public darkThemeService: DarkThemeService
  ) {}

}