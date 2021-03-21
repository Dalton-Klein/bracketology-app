import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masterbracket133Component } from './masterbracket133.component';

describe('Masterbracket133Component', () => {
  let component: Masterbracket133Component;
  let fixture: ComponentFixture<Masterbracket133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Masterbracket133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Masterbracket133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
