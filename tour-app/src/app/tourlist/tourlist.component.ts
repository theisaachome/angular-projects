import { Component, OnInit } from '@angular/core';
import { Tour, tours } from "../tours";


@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {
  
  tours:Tour[]=tours;
  
  constructor() { }

  ngOnInit(): void {
  }

}



