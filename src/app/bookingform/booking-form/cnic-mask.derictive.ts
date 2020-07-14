import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appCnicMask]',
})
export class CnicMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 5) {
      newVal = newVal.replace(/^(\d{0,5})/, '$1');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/^(\d{0,5})(\d{0,7})/, '$1-$2');
    } else if (newVal.length <= 13) {
      newVal = newVal.replace(/^(\d{0,5})(\d{0,7})(\d{0,1})/, '$1-$2-$3');
    } else {
      newVal = newVal.substring(0, 13);
      newVal = newVal.replace(/^(\d{0,5})(\d{0,7})(\d{0,1})/, '$1-$2-$3');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
