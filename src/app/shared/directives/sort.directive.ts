import { Directive, ElementRef, AfterViewInit, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective implements AfterViewInit {

  @Input() appSort:any;
  @Output() onSort:any;

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('Elemet:', this.element.nativeElement);
    this.element.nativeElement.onclick = (e) => {
      console.log('clicked', this.appSort);
      //this.onSort.emit(this.appSort);
    }
  }

}
