import { ElementRef } from '@angular/core';
import { ButtonHoverDirective } from './button-hover.directive';

describe('ButtonHoverDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef<any>(null);
    const directive = new ButtonHoverDirective(el);
    expect(directive).toBeTruthy();
  });
});
