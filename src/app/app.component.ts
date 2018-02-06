//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(CounterComponent)
  counterComponent: CounterComponent

  title = 'app';
  comments = [
    {
      author: 'Jay Kay',
      content: 'TypeScript makes Angular awesome'
    },
    {
      author: 'William',
      content: 'Yeah, right!'
    },
    {
      author: 'Raphael',
      content: 'Got stuck passing data around'
    }
  ];
  onShowComment(comment) {
    alert(comment.content);
  };
  items: Array<string> = [];
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.items = [
        'Pen',
        'Note',
        'Mug',
        'Charger',
        'Passport',
        'Keys'
      ]
      this.loading = false;
    }, 3000)
  }
  toggle = false;
  updateToggle() {
    this.toggle = !this.toggle;
  }
}
