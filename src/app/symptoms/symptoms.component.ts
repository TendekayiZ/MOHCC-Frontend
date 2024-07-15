import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent {
navigateToSTI() {
throw new Error('Method not implemented.');
}
navigateToSTD() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  navigateToSTIComponent() {
    this.router.navigate(['/sti']);
  }

  navigateToSTDComponent() {
    this.router.navigate(['/std']);
  }
}
