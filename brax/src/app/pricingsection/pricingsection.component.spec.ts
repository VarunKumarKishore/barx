import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingsectionComponent } from './pricingsection.component';

describe('PricingsectionComponent', () => {
  let component: PricingsectionComponent;
  let fixture: ComponentFixture<PricingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
