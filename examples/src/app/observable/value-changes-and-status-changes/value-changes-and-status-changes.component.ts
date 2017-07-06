import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms/forms';
import { Subscription } from 'rxjs/Subscription';
import { SignupFormGroupFactoryService } from 'app/validation/signup-form-group-factory.service';

@Component({
  selector: 'value-changes-and-status-changes',
  templateUrl: './value-changes-and-status-changes.component.html',
  styleUrls: ['./value-changes-and-status-changes.component.css']
})
export class ValueChangesAndStatusChangesComponent implements OnInit, OnDestroy {

  signupFormGroup: FormGroup;
  sub = new Subscription();

  constructor(signupFormGroupFactory: SignupFormGroupFactoryService) {
    this.signupFormGroup = signupFormGroupFactory.create({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  ngOnInit() {
    this.sub.add(this.signupFormGroup.valueChanges.subscribe(v => console.log('[valueChanges: form group]', v)));
    this.sub.add(this.signupFormGroup.get('name').valueChanges.subscribe(v => console.log('[valueChanges: name]', v)));
    this.sub.add(this.signupFormGroup.get('email').valueChanges.subscribe(v => console.log('[valueChanges: email]', v)));
    this.sub.add(this.signupFormGroup.get('password').valueChanges.subscribe(v => console.log('[valueChanges: password]', v)));
    this.sub.add(this.signupFormGroup.get('confirmPassword')
    .valueChanges.subscribe(v => console.log('[valueChanges: confirmPassword]', v)));
    this.sub.add(this.signupFormGroup.valueChanges.subscribe(s => console.log('[statusChanges: form group]', s)));
    this.sub.add(this.signupFormGroup.get('name').statusChanges.subscribe(s => console.log('[statusChanges: name]', s)));
    this.sub.add(this.signupFormGroup.get('email').statusChanges.subscribe(s => console.log('[statusChanges: email]', s)));
    this.sub.add(this.signupFormGroup.get('password').statusChanges.subscribe(s => console.log('[statusChanges: password]', s)));
    this.sub.add(this.signupFormGroup.get('confirmPassword')
    .statusChanges.subscribe(s => console.log('[statusChanges: confirmPassword]', s)));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
