import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleRecursiveFormGroupFactoryService } from 'app/complex-form/simple-recursive-form-group-factory.service';

@Component({
  selector: 'recursive-form',
  templateUrl: './recursive-form.component.html',
  styleUrls: ['./recursive-form.component.css']
})
export class RecursiveFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(simpleRecursiveFormGroupFactory: SimpleRecursiveFormGroupFactoryService) {
    this.formGroup = simpleRecursiveFormGroupFactory.create({
      name: '',
      children: [],
    });
  }

  ngOnInit() {
  }

}
