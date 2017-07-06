import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface SimpleRecursiveFormModal {
  name: string;
  children: SimpleRecursiveFormModal[];
}

@Injectable()
export class SimpleRecursiveFormGroupFactoryService {

  constructor(private fb: FormBuilder) { }

  create(model: SimpleRecursiveFormModal) {
    return this.fb.group({
      name: model.name,
      children: this.fb.array(model.children.map(m => this.create(m))),
    });
  }
}
