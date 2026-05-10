import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-docente-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './docente-dashboard.html',
  styleUrl: './docente-dashboard.css',
})

export class DocenteDashboard {

  docentes: any[] = [
    {
      id: 1,
      nombre: 'Eric Heredia',
      especialidad: 'Programación Web',
      email: 'eric@email.com'
    },
    {
      id: 2,
      nombre: 'Ana Pérez',
      especialidad: 'UX/UI',
      email: 'ana@email.com'
    }
  ];

  eliminarDocente(id: number) {

    if (confirm('¿Estás seguro de que deseas eliminar este docente?')) {

      console.log('Docente eliminado con ID:', id);

      // Lógica futura
    }

  }

}