import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from '../interfaces/planta';
@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/plantas'; //cambiar por la url de django

  crearPlanta(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  obtenerPlantas(): Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
