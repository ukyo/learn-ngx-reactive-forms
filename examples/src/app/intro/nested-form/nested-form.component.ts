import { Component, OnInit } from '@angular/core';
import { NestedFormGroupFactoryService } from 'app/intro/nested-form-group-factory.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(nestedFormGroupFactory: NestedFormGroupFactoryService) {
    this.formGroup = nestedFormGroupFactory.create();
  }

  ngOnInit() {
  }

}
