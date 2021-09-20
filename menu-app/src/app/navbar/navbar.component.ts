import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBars, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('content') linkContainer!: ElementRef;
  showLinks = false;
  constructor() {

  }
  ngAfterViewInit(): void {
    console.log(this.linkContainer);
  }

  ngOnInit(): void {
  }



}
