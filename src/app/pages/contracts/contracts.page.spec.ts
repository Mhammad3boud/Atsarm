import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractsPage } from './contracts.page';

describe('ContractsPage', () => {
  let component: ContractsPage;
  let fixture: ComponentFixture<ContractsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
