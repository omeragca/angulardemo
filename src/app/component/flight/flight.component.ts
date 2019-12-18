import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';
import { Flight } from 'src/app/model/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Flight[];
  displayedColumns = ['flightNo', 'airline', 'aircraft', 'fromAirport', 'toAirport', 'scheduledTime', 'estimatedTime', 'actualTime'];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightService.getFlights()
      .subscribe((data: any) => {
        this.flights = data;
      });
  }

}
