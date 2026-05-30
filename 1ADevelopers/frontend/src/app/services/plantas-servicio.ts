import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  id: number;
  categoria: string;
  descripcion: string;
}

export interface Especie {
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  categoria: number;
  usuario: number;
  imagenes: { url: string }[];
}

@Injectable({ providedIn: 'root' })
export class PlantasServicio {
  private API = 'http://localhost:8000/api/flora';

  constructor(private http: HttpClient){}

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.API}/categorias/`);
  }

  getPlantas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/especies/`);
  }

  crearPlanta(payload: Especie): Observable<any> {
    return this.http.post<any>(`${this.API}/especies/`, payload);
  }

  eliminarPlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/especies/${id}/`);
  }

}
