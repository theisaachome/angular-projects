import { Component, Input, OnInit } from '@angular/core';
import { Person } from "../data";

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  @Input() person?:Person;
  constructor() { }

  ngOnInit(): void {
  }
  

}
