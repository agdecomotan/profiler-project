import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserApi} from '../../data/api/user.api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;

  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(private router: Router,
              private db: UserApi,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

    get f() { return this.loginForm.controls; }

  login() {
      this.submitted = true;
      const loginObj = this.loginForm.value;

      if (this.loginForm.invalid) {
          return;
      }
      this.db.login(loginObj['username'], loginObj['password'])
          .subscribe(
              data => {
                if (data != null) {
                    localStorage.setItem('user', data['username']);
                    this.router.navigate(['/students']);
                } else {
                    this.loginError = true;
                }
              },
              error => {
                  this.loginError = true;
              }
          );
  }
}
