import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FichasServicio {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/fichas/';

  obtenerFichas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}fichas/`);
  }

  crearFicha(nuevaFicha: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevaFicha);
  }

  obtenerFichaId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  eliminarFicha(id: number): Observable<any> {
    return this.http.delete<any>(`${`${this.apiUrl}${id}/`}`);
  }
}
