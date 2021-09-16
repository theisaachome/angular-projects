import { Component, OnInit } from '@angular/core';
import { data, Person } from "../data";

@Component({
  selector: 'app-birthdaylist',
  templateUrl: './birthdaylist.component.html',
  styleUrls: ['./birthdaylist.component.css']
})
export class BirthdaylistComponent implements OnInit {

   people:Person[]=data;
  constructor() { }

  ngOnInit(): void {
  }
  clearPerson(){
    this.people = [];
  }

}
