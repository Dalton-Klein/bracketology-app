import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbracketComponent } from './masterbracket.component';

describe('MasterbracketComponent', () => {
  let component: MasterbracketComponent;
  let fixture: ComponentFixture<MasterbracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterbracketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
