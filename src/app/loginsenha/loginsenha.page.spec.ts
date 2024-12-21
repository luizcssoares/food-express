import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginsenhaPage } from './loginsenha.page';

describe('LoginsenhaPage', () => {
  let component: LoginsenhaPage;
  let fixture: ComponentFixture<LoginsenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
