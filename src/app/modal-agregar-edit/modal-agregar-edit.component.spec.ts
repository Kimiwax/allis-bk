import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEditComponent } from './modal-agregar-edit.component';

describe('ModalAgregarEditComponent', () => {
  let component: ModalAgregarEditComponent;
  let fixture: ComponentFixture<ModalAgregarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
