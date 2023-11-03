import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mi-directiva]'
})
export class MiDirectivaDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('El elemento ha sido clickeado');
  }
}
