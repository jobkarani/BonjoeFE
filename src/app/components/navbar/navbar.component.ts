import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navBarFunction() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
  }

}
