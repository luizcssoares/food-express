import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheprodutoPage } from './detalheproduto.page';

describe('DetalheprodutoPage', () => {
  let component: DetalheprodutoPage;
  let fixture: ComponentFixture<DetalheprodutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
