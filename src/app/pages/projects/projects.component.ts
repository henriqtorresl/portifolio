import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  showUpButton: boolean = false;
  showDownButton: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const container = document.querySelector('.projects') as HTMLElement;
    if (container) {
      container.addEventListener('scroll', () => this.updateScrollButtons());
      this.updateScrollButtons();
    }
  }

  updateScrollButtons(): void {
    const container = document.querySelector('.projects') as HTMLElement;
    if (container) {
      // * Lógica para fazer o botão de scrollar pra baixo aparecer:
      this.showDownButton =
        container.scrollTop < container.scrollHeight - container.clientHeight;

      // * Se eu quisesse que o meu botão de scrollar pra cima aparecesse bem no momento em que eu comecei a scrollar pra baixo:
      this.showUpButton = container.scrollTop > 0;

      // * Como eu quero que meu botão de scrollar pra cima apareça apenas quando eu chegar no final:
      // this.showUpButton =
      //   container.scrollHeight - container.scrollTop === container.clientHeight;
    }
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

  scrollToUp(): void {
    const container = document.querySelector('.projects') as HTMLElement;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  scrollToDown(): void {
    const container = document.querySelector('.projects') as HTMLElement;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
}
