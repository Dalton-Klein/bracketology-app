import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcaawrestlingComponent } from './ncaawrestling.component';

describe('NcaawrestlingComponent', () => {
  let component: NcaawrestlingComponent;
  let fixture: ComponentFixture<NcaawrestlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcaawrestlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaawrestlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
