import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSidebarOpen = false; // Fecha a sidebar se o clique for fora dela
      this.animationBackgroundSideBar();
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