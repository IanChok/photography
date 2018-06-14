import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  onScroll = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      if ($(window).scrollTop()) {
        // $('#navBar').addClass('black');
        this.onScroll = true;
      } else {
        // $('#navBar').removeClass('black');
        this.onScroll = false;
      }
  }
}
