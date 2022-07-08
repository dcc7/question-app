import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  @Input() module: string;
  cleanRoute: string;

  constructor() { }

  ngOnInit(): void {
    this.cleanRoute = this.module.replace(/\s/g, '').slice(0, 7).toLowerCase();
  }

}
