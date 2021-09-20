import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories: string[] = [];

  @Output() selecteCategory = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filterMenuItem(category: string) {
    this.selecteCategory.emit(category);
  }
}
