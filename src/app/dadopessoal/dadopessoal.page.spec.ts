import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadopessoalPage } from './dadopessoal.page';

describe('DadopessoalPage', () => {
  let component: DadopessoalPage;
  let fixture: ComponentFixture<DadopessoalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadopessoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
