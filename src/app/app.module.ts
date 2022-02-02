import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import { CourseComponent } from './course/course.component';
import {CoursesServices} from "./courses.service";
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    DetailsComponent,
    FormComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
