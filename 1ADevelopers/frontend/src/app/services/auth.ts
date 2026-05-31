import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //recordar despues aca iria la URL del backend desplegado
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  //Registrar nuevo usuario Docente
  register(userData:any): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, {
      ...userData,
      role: 'docente', // Asignamos el rol de Docente por defecto 
    });
  }




  //Login Usuario
  login(credentials:any): Observable<any> {
    return this.http.post(`${this.apiUrl}login/`, credentials);
  }
}
