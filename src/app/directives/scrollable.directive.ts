import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appScrollable]'
})
export class ScrollableDirective {
  @Output() scrollPosition = new EventEmitter();

  constructor(public element: ElementRef) {}

  @HostListener('scroll', ['$event']) onScroll(event) {
    try {
      const top = event.target.scrollTop;
      const height = this.element.nativeElement.scrollHeight;
      const offset = this.element.nativeElement.offsetHeight;

      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom');
        // console.log('bottom');
      }
    } catch (err) {}
  }
}
