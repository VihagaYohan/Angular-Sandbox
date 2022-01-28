import { Component, OnInit } from '@angular/core';

// models
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  title: string = 'List of last year movies';
  age: number = 25;
  movies: string[] = [
    'The last samurai',
    'Avengers : Endgame',
    'Law abinding citizen',
  ];
  imageUrl = 'https://picsum.photos/400/800';
  alt = 'sample-image';
  width = 100;
  height = 100;
  isActive: boolean = false;
  email = '';
  movie: Movie = {
    title: 'Ant Man',
    budget: 30125465,
    rating: 4.32556,
    watchCount: 100526,
    releasedDate: new Date(2018, 5, 18),
  };
  names = ['John Wick', 'Jack Ryan', 'Jack Reacher'];

  constructor() {
    console.log(this.movie);
  }

  ngOnInit(): void {}

  changeColor() {
    this.isActive = !this.isActive;
  }

  onSave(event: any) {
    event.stopPropagation();
    console.log(event);
  }

  onDivClick() {
    console.log('Div was clicked');
  }

  onKeyUp(event: any) {
    if (event.keycode == 13) {
      console.log(event.target.value);
    }
  }

  onKeyUp1() {
    console.log('enter pressed');
  }

  onPassword(password: string) {
    console.log(password);
  }

  getEmail() {}

  toggle() {
    return this.isActive = !this.isActive;
  }
}
