import {Score} from "./Score";

export class Student{

  fname: string="";
  lname : string="";
  cp: string ="";
  scores: Score[] = [];

  constructor(fname: string, lname: string, cp: string) {
    this.fname = fname;
    this.lname = lname;
    this.cp = cp;
  }
}
