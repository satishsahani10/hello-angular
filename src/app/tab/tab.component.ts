//import { Component, OnInit } from '@angular/core';
import { Component, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  tabContents: Array<HTMLElement>;
  tabLinks: Array<HTMLElement>;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  // ngAfterContentInit() {
  //   // Grab the DOM
  //   this.tabContents = this.el.nativeElement.querySelectorAll('.tabcontent');
  //   this.tabLinks = this.el.nativeElement.querySelectorAll('.tablink');
  //   // Activate first tab
  //   this.tabContents[0].style.display = "block";
  //   this.tabLinks[0].className = " active";
  // }
  // openTab(evt, cityName) {
  //   for (let i = 0; i < this.tabContents.length; i++) {
  //     this.tabContents[i].style.display = "none";
  //   }
  //   for (let i = 0; i < this.tabLinks.length; i++) {
  //     this.tabLinks[i].className = this.tabLinks[i].className.replace(" active", "");
  //   }
  //   this.el.nativeElement.querySelector(`#${cityName}`).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }
}
