import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })
  contacts?: FormArray;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      contacts:  this.fb.array([])
    });
    this.contacts = this.profileForm.get('contacts') as FormArray;
  }


  addContact(){
    this.contacts?.push(this.fb.control(''));
  }

  ngOnInit(): void {

  }

}
