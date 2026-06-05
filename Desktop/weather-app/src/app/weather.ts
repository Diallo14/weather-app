import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '97b8c80015eb749f5b13da703481e4b8';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`
    );
  }
}