import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkThemeService } from 'src/app/services/dark-theme.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() closeEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router,
    public darkThemeService: DarkThemeService
  ) {}

  ngOnInit(): void {
    
  }

  close(): void {
    this.closeEvent.emit('close');
  }

  isActive(route: string): string {
    return this.router.url.includes(route) ? 'active' : '';
  }

  alterTheme(): void {
    this.darkThemeService.toogleDarkTheme();
  }

}