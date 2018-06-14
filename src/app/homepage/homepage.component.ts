import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onscroll(event) {
    const wScroll = $(window).scrollTop();
    $('.sec1').css('background-position', 'center ' + (-wScroll) / 4 + 'px');
  }
}
