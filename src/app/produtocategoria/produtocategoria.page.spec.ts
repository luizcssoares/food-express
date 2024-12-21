import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutocategoriaPage } from './produtocategoria.page';

describe('ProdutocategoriaPage', () => {
  let component: ProdutocategoriaPage;
  let fixture: ComponentFixture<ProdutocategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutocategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
