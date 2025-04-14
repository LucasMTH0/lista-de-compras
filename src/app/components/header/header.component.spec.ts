import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { Location } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LoadingComponent } from '../loading/loading.component';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';
fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule.forRoot([
          {path: '', component: HomeComponent},
          {path: 'auth/login', component: LoginComponent},
          {path: 'auth/register', component: RegisterComponent}
        ])
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button home redirect correctly', async () => {
    const homeButton = fixture.nativeElement.querySelector('#button-home');
    homeButton.click();
    await fixture.whenStable()
    expect(location.path()).toBe('')
  })

  it('should button login redirect correctly', async() => {
    const loginButton = fixture.nativeElement.querySelector('#button-login')
    loginButton.click()
    await fixture.whenStable()
    expect(location.path()).toBe('/auth/login')
  })

  it('should button register redirect correctly' , async () => {
    const registerButton = fixture.nativeElement.querySelector('#button-register')
    registerButton.click()
    await fixture.whenStable()
    expect(location.path()).toBe('/auth/register')
  })
});
