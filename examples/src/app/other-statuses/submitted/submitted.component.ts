import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {

  formGroup: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: ''
    });
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
