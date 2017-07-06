import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';

@Component({
  selector: 'submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent implements OnInit {

  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({ name: '' });
  }

  ngOnInit() {
  }

  submit() {
    console.log('submitted!');
  }

  resetForm() {
    this.formGroupDirective.resetForm({ name: '' });
  }

}
