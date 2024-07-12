import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent {
  stdList = [
    { name: 'Chlamydia', symptoms: '...', prevention: '...', getHelp: '...' },
    { name: 'Gonorrhea', symptoms: '...', prevention: '...', getHelp: '...' },
    // Add more STDs here
  ];

  constructor(private router: Router) {}

  getHelp(std: any) {
    // Navigate to a new component with the STD details
    this.router.navigate(['/std', std.name]);
  }
}
