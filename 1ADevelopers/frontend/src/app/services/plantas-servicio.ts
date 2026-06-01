import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  id: number;
  categoria: string;
  descripcion: string;
}

export interface Especie {
  id?: number;
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  categoria: number;
  categoria_detalle?: {
    id: number;
    categoria: string;
    descripcion: string;
  };
  usuario: number;
  imagenes: { url: string }[];
}

@Injectable({ providedIn: 'root' })
export class PlantasServicio {
  private API = 'http://localhost:8000/api/flora';

  constructor(private http: HttpClient) {}

  getMisPlantas(): Observable<Especie[]> {
    return this.http.get<Especie[]>(`${this.API}/especies/mis-especies/`);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API}/categorias/`);
  }

  getPlantas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/especies/`);
  }

  crearPlanta(Especie: Especie): Observable<any> {
    return this.http.post<any>(`${this.API}/especies/`, Especie);
  }

  eliminarPlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/especies/${id}/`);
  }

  actualizarPlanta(id: number, especie: Especie): Observable<any> {
    return this.http.put<any>(`${this.API}/especies/${id}/`, especie);
  }

  getPlantaId(id: number): Observable<Especie> {
    return this.http.get<Especie>(`${this.API}/especies/${id}/`);
  }
}
