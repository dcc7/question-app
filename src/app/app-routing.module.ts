import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionShowComponent } from './question-show/question-show.component';
import { HscchemistryComponent } from './subject/hscchemistry/hscchemistry.component';
import { HscchemistrytopicsComponent } from './subject/hscchemistry/hscchemistrytopics/hscchemistrytopics.component';
import { HscphysicsComponent } from './subject/hscphysics/hscphysics.component';
import { HscphysicstopicsComponent } from './subject/hscphysics/hscphysicstopics/hscphysicstopics.component';
import { PrelimchemistryComponent } from './subject/prelimchemistry/prelimchemistry.component';
import { PrelimphysicsComponent } from './subject/prelimphysics/prelimphysics.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hscphysics', component: HscphysicsComponent},
  { path: 'hscchemistry', component: HscchemistryComponent},
  { path: 'preliminaryphysics', component: PrelimphysicsComponent},
  { path: 'preliminarychemistry', component: PrelimchemistryComponent},

  // hsc physics main routes.
  { path: 'hscphysics/module5', component: HscphysicstopicsComponent},
  { path: 'hscphysics/module6', component: HscphysicstopicsComponent},
  { path: 'hscphysics/module7', component: HscphysicstopicsComponent},
  { path: 'hscphysics/module8', component: HscphysicstopicsComponent},
  // hsc physics module 5
  { path: 'hscphysics/module5/Projectile Motion', component: QuestionShowComponent},
  { path: 'hscphysics/module5/Circular Motion', component: QuestionShowComponent},
  { path: 'hscphysics/module5/Motion in Gravitational Fields', component: QuestionShowComponent},
  // hsc physics module 6
  { path: 'hscphysics/module6/Charged Particles, Conductors and Electric and Magnetic Fields', component: QuestionShowComponent},
  { path: 'hscphysics/module6/The Motor Effect', component: QuestionShowComponent},
  { path: 'hscphysics/module6/Electromagnetic Induction', component: QuestionShowComponent},
  { path: 'hscphysics/module6/Applications of the Motor Effect', component: QuestionShowComponent},
  // hsc physics module 7
  { path: 'hscphysics/module7/Electromagnetic Spectrum', component: QuestionShowComponent},
  { path: 'hscphysics/module7/Wave Model', component: QuestionShowComponent},
  { path: 'hscphysics/module7/Quantum Model', component: QuestionShowComponent},
  { path: 'hscphysics/module7/Light and Special Relativity', component: QuestionShowComponent},
  // hsc physics module 8
  { path: 'hscphysics/module8/Origins of the Elements', component: QuestionShowComponent},
  { path: 'hscphysics/module8/Structure of the Atom', component: QuestionShowComponent},
  { path: 'hscphysics/module8/Quantum Mechanical Nature of the Atom', component: QuestionShowComponent},
  { path: 'hscphysics/module8/Properties of the Nucleus', component: QuestionShowComponent},
  { path: 'hscphysics/module8/Deep Inside the Atom', component: QuestionShowComponent},

  // hsc chemistry main routes.
  { path: 'hscchemistry/module5', component: HscchemistrytopicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
