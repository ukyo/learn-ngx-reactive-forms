import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupFormGroupFactoryService } from 'app/validation/signup-form-group-factory.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'observable-root',
  templateUrl: './observable-root.component.html',
  styleUrls: ['./observable-root.component.css']
})
export class ObservableRootComponent implements OnInit, OnDestroy {

  signupFormGroup: FormGroup;
  sub: Subscription;

  constructor(signupFormGroupFactory: SignupFormGroupFactoryService) {
    this.signupFormGroup = signupFormGroupFactory.create({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  ngOnInit() {
    this.sub = new Subscription();
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
