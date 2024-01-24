import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //PIPES
  currentDate: any;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
