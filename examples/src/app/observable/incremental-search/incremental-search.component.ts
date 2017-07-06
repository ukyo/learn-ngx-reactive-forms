import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const list = [
  'apple',
  'banana',
  'dog',
  'big dog',
  'small dog',
  'cat',
  'big cat',
  'application',
];

@Component({
  selector: 'incremental-search',
  templateUrl: './incremental-search.component.html',
  styleUrls: ['./incremental-search.component.css']
})
export class IncrementalSearchComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  sub = new Subscription();
  results = [];

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({ query: '' });
    this.sub.add(
      this.formGroup.get('query')
      .valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(q => {
        if (!q) {
          this.results = [];
          return;
        }
        this.results = list.filter(s => s.includes(q));
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
