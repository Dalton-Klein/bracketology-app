import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketformComponent } from './bracketform.component';

describe('BracketformComponent', () => {
  let component: BracketformComponent;
  let fixture: ComponentFixture<BracketformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
