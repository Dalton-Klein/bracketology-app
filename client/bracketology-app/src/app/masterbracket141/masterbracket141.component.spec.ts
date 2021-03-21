import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masterbracket141Component } from './masterbracket141.component';

describe('Masterbracket141Component', () => {
  let component: Masterbracket141Component;
  let fixture: ComponentFixture<Masterbracket141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Masterbracket141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Masterbracket141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
