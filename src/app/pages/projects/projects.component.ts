import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

}