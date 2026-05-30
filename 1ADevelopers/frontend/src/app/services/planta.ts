import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Categoria {
  id: number;
  categoria: string;
  descripcion: string;
}

export interface EspeciePayload {
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  categoria: number;
  imagenes: { url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  
  private http = inject(HttpClient);
  
  
  private readonly API = 'http://localhost:8000/api/flora';


  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API}/categorias/`);
  }

  
  crearPlanta(payload: EspeciePayload): Observable<EspeciePayload> {
    return this.http.post<EspeciePayload>(`${this.API}/especies/`, payload);
  }
}