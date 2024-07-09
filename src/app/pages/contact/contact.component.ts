import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DarkThemeService } from 'src/app/services/dark-theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string = 'henriquetlandin@gmail.com';
  number: string = '(61) 99886-0013';


  constructor(
    public darkThemeService: DarkThemeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
  }

  copyText(): void {
    this.snackBar.open('Texto copiado!', 'OK', {
      duration: 1000
    });
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

}