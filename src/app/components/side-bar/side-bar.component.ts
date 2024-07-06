import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() closeEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  close(): void {
    this.closeEvent.emit('close');
  }

}

