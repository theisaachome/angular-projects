import { Component, Input, OnInit } from '@angular/core';
import { Tour } from "../tours";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  @Input() tour:Tour|undefined

  readMore = false;
  constructor() { 

  }
  ngOnInit(): void {
  }

  showMore(){
    this.readMore = !this.readMore;
    console.log(this.readMore);
  }
  shortDescription(){
   return this.tour?.info.substring(0,200);
  }

}

