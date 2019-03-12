import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.buildForm();
  }
  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: name.toLowerCase(),
      email: 'john@angular.io',
      password: ''
    });
  }
}
