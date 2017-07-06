import { Component, OnInit, Input } from '@angular/core';
import { SimpleRecursiveFormGroupFactoryService } from 'app/complex-form/simple-recursive-form-group-factory.service';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'simple-recursive-form',
  templateUrl: './simple-recursive-form.component.html',
  styleUrls: ['./simple-recursive-form.component.css']
})
export class SimpleRecursiveFormComponent implements OnInit {

  @Input() group: FormGroup;
  areChildrenShown = true;

  constructor(private simpleRecursiveFormGroupFactory: SimpleRecursiveFormGroupFactoryService) { }

  ngOnInit() {
  }

  get children(): FormArray {
    return this.group.get('children') as FormArray;
  }

  addChild() {
    this.children.push(this.simpleRecursiveFormGroupFactory.create({
      name: '',
      children: []
    }));
    this.children.markAsDirty();
    this.children.markAsTouched();
  }

  removeChild(index: number) {
    this.children.removeAt(index);
    this.children.markAsDirty();
    this.children.markAsTouched();
  }

}
