import { Component, OnInit } from '@angular/core';
import { Review, reviews } from "../data";
import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;
  reviews: Review[] = reviews;
  quotIcon = faQuoteRight;
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }

  private checkNumber(index: number) {
    if (index > reviews.length - 1) {
      return this.index = 0;
    }
    if (index < 0) {
      return this.index = reviews.length - 1;
    }
    return index;
  }
  prevPerson() {
    this.checkNumber(--this.index)
  }
  nextPerson() {
    let newIndex = ++this.index;
    this.checkNumber(newIndex)
  }
  randonPerson() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex == this.index) {
      randomIndex = this.index + 1;
    }
    this.index = randomIndex;
  }
}
