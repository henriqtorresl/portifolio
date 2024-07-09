import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { DarkThemeService } from 'src/app/services/dark-theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isSidebarOpen = false;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    public darkThemeService: DarkThemeService
  ) {}

  ngOnInit(): void {
  }

  // Método que deixa o fundo do sidebar embaçado quando ele estiver aberto
  animationBackgroundSideBar(): void {
    if (this.isSidebarOpen) {
      document.body.classList.add('sidebar-active');
    } else {
      document.body.classList.remove('sidebar-active');
    }
  }

  onMenuButtonClick(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.animationBackgroundSideBar();
  }

  // Fecha a sidebar se o clique for fora dela
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const sidebar = document.getElementsByClassName('sidebar').item(0)!;

    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Animação do background do sidebar
      this.animationBackgroundSideBar();
      // Aplica a animação de fechar o sidebar
      sidebar.classList.add('slide-out');
      // Espera um milisegundo para setar que o sidebar foi fechado
      timer(100).pipe(take(1)).subscribe(() => this.isSidebarOpen = false);
    }
  }

  closeSideBar(event: string): void {
    if (event == 'close') {
      this.isSidebarOpen = false;
      this.animationBackgroundSideBar();
    }
  }

  isActive(route: string): string {
    this.animationBackgroundSideBar();
    return this.router.url.includes(route) ? 'active' : '';
  }

  alterTheme(): void {
    this.darkThemeService.toogleDarkTheme();
    this.animationBackgroundSideBar();
  }

}