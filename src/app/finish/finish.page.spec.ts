import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinishPage } from './finish.page';

describe('FinishPage', () => {
  let component: FinishPage;
  let fixture: ComponentFixture<FinishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
