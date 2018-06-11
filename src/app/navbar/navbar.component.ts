import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
        $('#navBar').addClass('black');
      } else {
        $('#navBar').removeClass('black');
      }
    });
  }
}
