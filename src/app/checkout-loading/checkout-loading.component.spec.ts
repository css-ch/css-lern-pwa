import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLoadingComponent } from './checkout-loading.component';

describe('CheckoutLoadingComponent', () => {
  let component: CheckoutLoadingComponent;
  let fixture: ComponentFixture<CheckoutLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
