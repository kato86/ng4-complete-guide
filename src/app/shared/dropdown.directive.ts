<<<<<<< HEAD
import { Directive } from '@angular/core';
=======
import { Directive, HostListener, HostBinding } from '@angular/core';
>>>>>>> cf7f3891a2114b3b5f4c2d6701e070dde84a8074

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
<<<<<<< HEAD
=======
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseenter') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
>>>>>>> cf7f3891a2114b3b5f4c2d6701e070dde84a8074

  constructor() { }

}
