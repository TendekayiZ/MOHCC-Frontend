// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;
  currentYear = new Date().getFullYear();

  services = [
    {
      icon: 'vial',
      title: 'STI/STD Testing',
      description: 'Comprehensive testing for a wide range of sexually transmitted infections and diseases.'
    },
    {
      icon: 'medkit',
      title: 'Treatment',
      description: 'Effective treatment and management of STIs/STDs, with discreet and confidential care.'
    },
    {
      icon: 'comments',
      title: 'Counseling',
      description: 'Personalized counseling and education to promote sexual health and well-being.'
    }
  ];
}