import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  city: string = '';
  weather: any = null;
  loading: boolean = false;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (!this.city) return;
    this.loading = true;
    this.error = '';
    this.weather = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Ville introuvable. Vérifie le nom et réessaie.';
        this.loading = false;
      }
    });
  }
}
export { AppComponent as App };