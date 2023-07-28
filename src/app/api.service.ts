// python-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonApiService {
  private apiUrl = 'http://localhost:8000/api/run-python-script/'; // Remplacez l'URL par l'URL réelle de votre API Django

  constructor(private http: HttpClient) { }

  runPythonScript(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
