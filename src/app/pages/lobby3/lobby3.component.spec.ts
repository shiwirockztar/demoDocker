import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lobby3Component } from './lobby3.component';

describe('Lobby3Component', () => {
  let component: Lobby3Component;
  let fixture: ComponentFixture<Lobby3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lobby3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lobby3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
