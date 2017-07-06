import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'product-form-field',
  templateUrl: './product-form-field.component.html',
  styleUrls: ['./product-form-field.component.css']
})
export class ProductFormFieldComponent implements OnInit {

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
