import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helper/must-match.validator';
import { UserService } from '../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userId: any;
  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [0],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.userId = this._activateRoute.snapshot.paramMap.get('id');
    if (this.userId > 0) {
      var exisitngUser = this._userService.getUserById(this.userId);
      this.setValueInForm(exisitngUser);
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    var payload = this.registerForm.value;
    if (this.registerForm.valid) {
      if (this.userId > 0) {
        this._userService.editUser(payload);
        this._router.navigateByUrl('/reactive-form-listing');
      }
      else {
        payload['id'] = this.randomNumber(1, 100);
        this._userService.saveUser(payload);
        this._router.navigateByUrl('/reactive-form-listing');
      }
    }
    else {
      alert('form is invalid');
    }
  }

  randomNumber(min: any, max: any) {
    return Math.round(Math.random() * (max - min + 1) + min);
  }

  setValueInForm(existingUser: any) {
    this.registerForm.get('id').setValue(existingUser?.id);
    this.registerForm.get('title').setValue(existingUser?.title);
    this.registerForm.get('firstName').setValue(existingUser?.firstName);
    this.registerForm.get('lastName').setValue(existingUser?.lastName);
    this.registerForm.get('email').setValue(existingUser?.email);
    this.registerForm.get('password').setValue(existingUser?.password);
    this.registerForm.get('confirmPassword').setValue(existingUser?.confirmPassword);
  }
}
