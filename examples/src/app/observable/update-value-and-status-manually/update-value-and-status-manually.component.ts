import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'update-value-and-status-manually',
  templateUrl: './update-value-and-status-manually.component.html',
  styleUrls: ['./update-value-and-status-manually.component.css']
})
export class UpdateValueAndStatusManuallyComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  sub = new Subscription;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: ['', Validators.required]
    });
    this.sub.add(this.formGroup.valueChanges.subscribe(v => console.log(v)));
    this.sub.add(this.formGroup.statusChanges.subscribe(s => console.log(s)));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
