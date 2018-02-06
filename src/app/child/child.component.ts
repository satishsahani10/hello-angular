import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // Encapsulation: Emulated
  encapsulation: ViewEncapsulation.Emulated
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

