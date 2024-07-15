import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sti',
  templateUrl: './sti.component.html',
  styleUrls: ['./sti.component.css']
})
export class StiComponent {
  stiList = [
    {
      name: 'HIV',
      symptoms: 'Flu-like symptoms, swollen lymph nodes, fatigue, weight loss',
      prevention: [
        'Use condoms during sexual activity',
        'Avoid sharing needles or syringes',
        'Get tested regularly and encourage partners to do the same',
        'Take pre-exposure prophylaxis (PrEP) medication if at high risk'
      ],
      getHelp: 'Seek medical care from a healthcare provider, contact local HIV/AIDS organizations for support and resources.'
    },
    {
      name: 'Syphilis',
      symptoms: 'Primary stage (painless sore), secondary stage (rash, fever, swollen lymph nodes), latent stage, and tertiary stage (serious complications)',
      prevention: [
        'Use condoms during sexual activity',
        'Avoid sexual contact with anyone who has syphilis',
        'Get tested regularly and encourage partners to do the same'
      ],
      getHelp: 'Seek medical care from a healthcare provider, who can provide appropriate treatment.'
    },
    {
      name: 'Chlamydia',
      symptoms: 'Often no symptoms, but can include pain during urination, unusual discharge, and pelvic pain',
      prevention: [
        'Use condoms during sexual activity',
        'Get tested regularly, especially if having multiple partners',
        'Encourage partners to get tested and treated'
      ],
      getHelp: 'Seek medical care from a healthcare provider, who can provide appropriate treatment.'
    },
    {
      name: 'Gonorrhea',
      symptoms: 'Unusual discharge, pain during urination, or pelvic/testicular pain',
      prevention: [
        'Use condoms during sexual activity',
        'Get tested regularly, especially if having multiple partners',
        'Encourage partners to get tested and treated'
      ],
      getHelp: 'Seek medical care from a healthcare provider, who can provide appropriate treatment.'
    },
    {
      name: 'Herpes',
      symptoms: 'Painful blisters or sores on the genitals, rectum, or mouth',
      prevention: [
        'Use condoms during sexual activity',
        'Avoid sexual contact during outbreaks',
        'Consider taking antiviral medication to reduce transmission'
      ],
      getHelp: 'Seek medical care from a healthcare provider, who can provide guidance on managing the condition.'
    }
  ];

  constructor(private router: Router) {}

  getHelp(sti: any) {
    // Navigate to a new component with the STI details
    this.router.navigate(['/sti', sti.name]);
  }
}