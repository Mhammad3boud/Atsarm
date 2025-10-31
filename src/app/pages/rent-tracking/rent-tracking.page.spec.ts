import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentTrackingPage } from './rent-tracking.page';

describe('RentTrackingPage', () => {
  let component: RentTrackingPage;
  let fixture: ComponentFixture<RentTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
