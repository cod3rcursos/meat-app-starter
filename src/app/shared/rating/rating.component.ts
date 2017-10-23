import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratings: number[] = [1, 2, 3, 4, 5];
  rating = 0;
  mouseover = 0;

  @Output() onRating = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  emitRating(rating: number) {
    this.rating = rating;
    this.onRating.emit(this.rating);
  }

  handleMouseEnter(rating: number) {
    console.log(`enter`, rating);
    this.mouseover = rating;
  }

  handleMouseLeave() {
    console.log(`leave`);
    this.mouseover = 0;
  }

  isStarFilled(index: number) {
    return index <= this.rating || index <= this.mouseover;
  }
}
