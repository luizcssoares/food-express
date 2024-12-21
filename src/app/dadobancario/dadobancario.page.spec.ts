import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadobancarioPage } from './dadobancario.page';

describe('DadobancarioPage', () => {
  let component: DadobancarioPage;
  let fixture: ComponentFixture<DadobancarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadobancarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
