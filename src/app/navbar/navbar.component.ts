import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar, nz-demo-dropdown-basic',  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showMe:boolean=false
  ngOnit()
  {

  }
  toggleTag(){
    this.showMe=!this.showMe
  }
}
