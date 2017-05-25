import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipricingComponent } from './multipricing.component';

describe('MultipricingComponent', () => {
  let component: MultipricingComponent;
  let fixture: ComponentFixture<MultipricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
