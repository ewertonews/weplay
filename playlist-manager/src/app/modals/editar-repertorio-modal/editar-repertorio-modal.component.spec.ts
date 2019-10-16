import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRepertorioModalComponent } from './editar-repertorio-modal.component';

describe('EditarRepertorioModalComponent', () => {
  let component: EditarRepertorioModalComponent;
  let fixture: ComponentFixture<EditarRepertorioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRepertorioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRepertorioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
