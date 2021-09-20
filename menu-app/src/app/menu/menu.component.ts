import { Component, Input, OnInit } from '@angular/core';
import { Menu } from "../data";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuItem: Menu[] = [];
  constructor() { }

  ngOnInit(): void {
  }


}
