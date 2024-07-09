import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkThemeService } from 'src/app/services/dark-theme.service';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() closeEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(
    private router: Router,
    public darkThemeService: DarkThemeService
  ) {}

  ngOnInit(): void {
    
  }

  close(): void {
    // Aplica a animação de fechar o side bar:
    this.sidebar.nativeElement.classList.add('slide-out');
    
    // Espera um milisegundo para emitir o evento que destroi o componente
    timer(100).pipe(take(1)).subscribe( () => this.closeEvent.emit('close'));
  }

  isActive(route: string): string {
    return this.router.url.includes(route) ? 'active' : '';
  }

  alterTheme(): void {
    this.darkThemeService.toogleDarkTheme();
  }

}