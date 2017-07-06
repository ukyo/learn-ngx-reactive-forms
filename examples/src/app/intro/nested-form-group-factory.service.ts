import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class NestedFormGroupFactoryService {

  constructor(private fb: FormBuilder) { }

  create() {
    return this.fb.group({
      name: 'hello',
      products: this.fb.array([
        this.fb.group({
          name: 'apple',
          price: 100,
        }),
        this.fb.group({
          name: 'orange',
          price: 200,
        })
      ])
    });
  }
}
