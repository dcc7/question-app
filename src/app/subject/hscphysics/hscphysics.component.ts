import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hscphysics',
  templateUrl: './hscphysics.component.html',
  styleUrls: ['./hscphysics.component.css']
})
export class HscphysicsComponent implements OnInit {

  modules: string[] = [
    'Module 5: Advanced Mechanics',
    'Module 6: Electromagnetism',
    'Module 7: The Nature of Light',
    'Module 8: From the Universe to the Atom',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
