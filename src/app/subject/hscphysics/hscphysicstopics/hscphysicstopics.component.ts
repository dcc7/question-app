import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hscphysicstopics',
  templateUrl: './hscphysicstopics.component.html',
  styleUrls: ['./hscphysicstopics.component.css']
})
export class HscphysicstopicsComponent implements OnInit {
  topics: string[];

  moduleFiveTopics: string[] = [
    'Projectile Motion',
    'Circular Motion',
    'Motion in Gravitational Fields',
  ];
  moduleSixTopics: string[] = [
    'Charged Particles, Conductors and Electric and Magnetic Fields',
    'The Motor Effect',
    'Electromagnetic Induction',
    'Applications of the Motor Effect',
  ];
  moduleSevenTopics: string[] = [
    'Electromagnetic Spectrum',
    'Wave Model',
    'Quantum Model',
    'Light and Special Relativity',
  ];
  moduleEightTopics: string[] = [
    'Origins of the Elements',
    'Structure of the Atom',
    'Quantum Mechanical Nature of the Atom',
    'Properties of the Nucleus',
    'Deep Inside the Atom',
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.url[1].path === 'module5'){
      this.topics = this.moduleFiveTopics;
    }
    if (this.route.snapshot.url[1].path === 'module6'){
      this.topics = this.moduleSixTopics;
    }
    if (this.route.snapshot.url[1].path === 'module7'){
      this.topics = this.moduleSevenTopics;
    }
    if (this.route.snapshot.url[1].path === 'module8'){
      this.topics = this.moduleEightTopics;
    }
  }

}
