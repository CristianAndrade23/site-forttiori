import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  statusMenu = false;

  constructor() { }

  ngOnInit() {
  }

  abreMenu() {
    this.statusMenu = !this.statusMenu;
  }

}
