import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateButtonOptionsComponent } from './create-button-options.component';

describe('CreateButtonOptionsComponent', () => {
  let component: CreateButtonOptionsComponent;
  let fixture: ComponentFixture<CreateButtonOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateButtonOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateButtonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
