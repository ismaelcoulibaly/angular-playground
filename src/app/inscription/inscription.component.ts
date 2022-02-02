import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
   profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required, []],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      pob: ['', Validators.required],
      dob: ['', Validators.required],
      contacts: this.fb.group({
          domicile: ['', Validators.pattern("[0-9 ]{12}")],
          bureau: ['', Validators.pattern("[0-9 ]{12}")],
          skype: ['', Validators.pattern("[0-9 ]{12}")],
        autre: ['', Validators.pattern("[0-9 ]{12}")]
      }),

      address: this.fb.array([{
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      },
        {
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }
      ]),
      scores:  this.fb.array([{}])
    });
    this.score = this.profileForm.get('scores') as FormArray;
  }

  ngOnInit(): void {
    this.
  }

  addScore(){

    this.scores.push(this.fb.group({
      scoreType: [''],
      scoreValue:[]
    }))
  }

}
