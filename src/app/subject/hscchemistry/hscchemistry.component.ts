import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hscchemistry',
  templateUrl: './hscchemistry.component.html',
  styleUrls: ['./hscchemistry.component.css']
})
export class HscchemistryComponent implements OnInit {

  modules: string[] = [
    'Module 5: Equilibirum and Acid Reactions',
    'Module 6: Acid/Base Reactions',
    'Module 7: Organic Chemistry',
    'Module 8: Applying Chemical Ideas',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
