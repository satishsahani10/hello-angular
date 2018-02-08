import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../models/flight';
import { ActivatedRoute } from '@angular/router';
import { debuglog } from 'util';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {

  flightModel: Flight;
  // Array of cities
  cities: Array<string> = [
    'Lagos',
    'Mumbai',
    'New York',
    'London',
    'Nairobi'
  ];
  constructor(private route: ActivatedRoute) {
    this.flightModel = new Flight('', '', '', '', 0, new Date(), 0, 0, new Date());
  }
  ngOnInit() {
  }
  // Handle for submission
  handleSubmit() {
    console.log(this.flightModel);
  }
}
