import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() subject: string;
  @Input() route: string;

  cleanRoute: string;

  constructor() { }

  ngOnInit(): void {
    this.cleanRoute = this.route.replace(/\s/g, '').toLowerCase();
  }

}
