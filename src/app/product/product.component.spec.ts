import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have shippingDetails as false`, () => {
    const fixture1 = TestBed.createComponent(ProductComponent);
    const product = fixture1.componentInstance;
    expect(product.shippingDetails).toEqual(false);
  });

  it(`should have addProductForm as false`, () => {
    const fixture1 = TestBed.createComponent(ProductComponent);
    const product = fixture1.componentInstance;
    expect(product.addProductForm).toEqual(false);
  });
});
