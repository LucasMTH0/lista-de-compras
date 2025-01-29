import {Component, Inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from '../../interface/User';
import {environment} from '../../../environments/environment';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {UserSignal} from '../../signals/UserSignal';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-auth-forms',
  imports: [ReactiveFormsModule],
  providers: [UserSignal],
  templateUrl: './auth-forms.component.html',
  styleUrl: './auth-forms.component.scss'
})

export class AuthFormsComponent {
  @Input() variant: 'login' | 'register' = 'login';
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private signal: UserSignal,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  })

  submitLogin(){
    this.userService.login(this.loginForm.value as User).
    subscribe(
      (userData: any) => {
        localStorage.setItem(environment.LOCALSTORAGE, JSON.stringify(userData))
        this.signal.setUser(userData);
        this.userService.setUser(userData);
        this.router.navigateByUrl('/');
      }
    )
  }

  submitRegister(){
    const form = this.registerForm.value;
    if(form.password === form.repeatPassword){
      this.userService.register(form as User).
      subscribe((registerSuccessfulMessage: any) => {
        this.toastr.success(registerSuccessfulMessage.message);
        this.router.navigateByUrl('/auth/login')
      })
    }
  }
}
