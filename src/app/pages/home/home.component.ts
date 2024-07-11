import { Component, OnInit } from '@angular/core';
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

    this.animationExperience();

    this.animationGraduation();
  }

  animationExperience(): void {
    const experience = document.querySelector('.experience')!;

    const myObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('showFromDown');
      }
    }, {
      threshold: 0.2
    });

    myObserver.observe(experience);
  }

  animationGraduation(): void {
    const graduation = document.querySelector('.unb')!;

    const myObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('showFromRight');
      }
    }, {
      threshold: 0.5
    });

    myObserver.observe(graduation);
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