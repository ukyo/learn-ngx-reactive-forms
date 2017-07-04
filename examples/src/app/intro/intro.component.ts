import { Component, OnInit } from '@angular/core';
import { LoginFormService } from "app/intro/login-form.service";

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(public loginForm: LoginFormService) { }

  ngOnInit() {
  }

}
