import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlterarComponent } from './formulario-alterar.component';

describe('FormularioAlterarComponent', () => {
  let component: FormularioAlterarComponent;
  let fixture: ComponentFixture<FormularioAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
