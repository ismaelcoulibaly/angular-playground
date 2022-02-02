import { Component } from '@angular/core';
import {Student} from "./models/Student";
import {Score} from "./models/Score";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-playground';
  // numbers : Number[] = [];
  // max : Number= 0;
  // nombre =12;
  // students: Student[] = [];
  // score: Score[]=[];
  // selected?: Student;

  constructor() {
    // this.students.push(new Student("is","co", "isco"));
    // this.students.push(new Student("i","c", "ic"));
    // this.students.push(new Student("s","o", "so"));
    // this.students.push(new Student("i","o", "io"));
  }

  // add() {
  //   this.numbers.push(Math.floor(Math.random()*100));
  //   this.max = this.numbers.length -1;
  // }
  //
  // select(ss:Student){
  //   this.selected = ss;
  //
  // }
}
