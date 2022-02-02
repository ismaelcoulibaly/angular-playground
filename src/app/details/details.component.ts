import { Component, OnInit } from '@angular/core';
import {Student} from "../models/Student";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  // student: Student();
  ngOnInit(): void {
  }

}
