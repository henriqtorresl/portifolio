import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() closeEvent: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  close(): void {
    this.closeEvent.emit('close');
  }

  isActive(route: string): string {
    return this.router.url.includes(route) ? 'active' : '';
  }

}
