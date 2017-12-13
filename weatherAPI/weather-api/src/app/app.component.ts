import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = ""
  weather = []

  cities = [
    "Chicago", "Burbank", "Dallas"
  ]

  constructor(private _weatherService: WeatherService) { }

}

