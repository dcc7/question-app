import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HscphysicsComponent } from './subject/hscphysics/hscphysics.component';
import { HscchemistryComponent } from './subject/hscchemistry/hscchemistry.component';
import { PrelimphysicsComponent } from './subject/prelimphysics/prelimphysics.component';
import { PrelimchemistryComponent } from './subject/prelimchemistry/prelimchemistry.component';
import { ModuleComponent } from './module/module.component';
import { HscphysicstopicsComponent } from './subject/hscphysics/hscphysicstopics/hscphysicstopics.component';
import { QuestionShowComponent } from './question-show/question-show.component';
import { HscchemistrytopicsComponent } from './subject/hscchemistry/hscchemistrytopics/hscchemistrytopics.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HscphysicsComponent,
    HscchemistryComponent,
    PrelimphysicsComponent,
    PrelimchemistryComponent,
    ModuleComponent,
    HscphysicstopicsComponent,
    QuestionShowComponent,
    HscchemistrytopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
