import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = ['HSC Physics', 'HSC Chemistry', 'Preliminary Physics', 'Preliminary Chemistry'];

  constructor() { }

  ngOnInit(): void {
  }

}
