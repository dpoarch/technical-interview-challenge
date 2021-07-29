import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {
  apiUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getBreeds(){
    return this.http.get<any>(this.apiUrl+'/api/breeds');
  }
}
