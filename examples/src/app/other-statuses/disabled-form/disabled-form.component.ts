import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'disabled-form',
  templateUrl: './disabled-form.component.html',
  styleUrls: ['./disabled-form.component.css']
})
export class DisabledFormComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      group1: fb.group({
        foo: '',
        bar: '',
      }),
      group2: fb.group({
        hoge: '',
        fuga: ['', Validators.required],
      }),
    });

    this.formGroup2 = fb.group({
      group1: fb.group({
        foo: '',
        bar: '',
      }),
      group2: fb.group({
        hoge: '',
        fuga: ['', Validators.required],
      }),
    });
  }

  ngOnInit() {
  }

  toggleDisabled(c: AbstractControl) {
    c.disabled ? c.enable() : c.disable();
  }

  toggleDisabledOnlySelf(c: AbstractControl) {
    c.disabled ? c.enable({ onlySelf: true }) : c.disable({ onlySelf: true });
  }

}
