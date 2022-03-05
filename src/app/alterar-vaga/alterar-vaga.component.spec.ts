import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarVagaComponent } from './alterar-vaga.component';

describe('AlterarVagaComponent', () => {
  let component: AlterarVagaComponent;
  let fixture: ComponentFixture<AlterarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
