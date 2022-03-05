import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExcluirComponent } from './formulario-excluir.component';

describe('FormularioExcluirComponent', () => {
  let component: FormularioExcluirComponent;
  let fixture: ComponentFixture<FormularioExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
