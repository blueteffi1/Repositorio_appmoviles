import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicionPage } from './edicion.page';

describe('EdicionPage', () => {
  let component: EdicionPage;
  let fixture: ComponentFixture<EdicionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
