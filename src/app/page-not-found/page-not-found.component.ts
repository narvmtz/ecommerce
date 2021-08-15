import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background =
      'linear-gradient(to right, white 50%, #383838 50%)';
  }
}
