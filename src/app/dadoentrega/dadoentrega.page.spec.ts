import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadoentregaPage } from './dadoentrega.page';

describe('DadoentregaPage', () => {
  let component: DadoentregaPage;
  let fixture: ComponentFixture<DadoentregaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoentregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
