import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkThemeService } from 'src/app/services/dark-theme.service';
import TypeIt from "typeit";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public darkThemeService: DarkThemeService
  ) {}

  ngOnInit(): void {
    this.animateSubTitle();
  }

  animateSubTitle(): void {
    new TypeIt('#element', {
      strings: `Desenvolvedor Full Stack`,
      speed: 75,
      loop: true,
    }).go();
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

}