import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>
  {
    let headers= new HttpHeaders();
    headers=headers.set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
                   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
  
    return this.http.get<WeatherData>(`${environment.weatherApiBaseUrl}/${cityName}`, 

    {  headers: headers  }
    );
  }
}
