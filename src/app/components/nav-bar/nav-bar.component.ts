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

  onMenuButtonClick(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSidebarOpen = false; // Fecha a sidebar se o clique for fora dela
    }
  }

  closeSideBar(event: string): void {
    if (event == 'close') {
      this.isSidebarOpen = false;
    }
  }

  isActive(route: string): string {
    return this.router.url.includes(route) ? 'active' : '';
  }

  alterTheme(): void {
    this.darkThemeService.toogleDarkTheme();
  }

}