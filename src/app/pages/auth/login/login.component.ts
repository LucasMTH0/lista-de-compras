import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../interface/User';
import {environment} from '../../../../environments/environment';
import {AuthFormsComponent} from '../../../components/auth-forms/auth-forms.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, AuthFormsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private userService: UserService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })


}
