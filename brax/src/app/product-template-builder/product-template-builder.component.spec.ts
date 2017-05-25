import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateBuilderComponent } from './product-template-builder.component';

describe('ProductTemplateBuilderComponent', () => {
  let component: ProductTemplateBuilderComponent;
  let fixture: ComponentFixture<ProductTemplateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
