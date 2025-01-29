import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../interface/User';
import {Route, Router} from '@angular/router';
import {AuthFormsComponent} from '../../../components/auth-forms/auth-forms.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, AuthFormsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  })

}
