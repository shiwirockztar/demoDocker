import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signupv2Component } from './signupv2.component';

describe('Signupv2Component', () => {
  let component: Signupv2Component;
  let fixture: ComponentFixture<Signupv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signupv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signupv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
