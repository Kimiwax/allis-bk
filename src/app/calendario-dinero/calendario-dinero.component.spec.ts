import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDineroComponent } from './calendario-dinero.component';

describe('CalendarioDineroComponent', () => {
  let component: CalendarioDineroComponent;
  let fixture: ComponentFixture<CalendarioDineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioDineroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
