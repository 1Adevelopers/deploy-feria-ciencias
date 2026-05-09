import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: any[] = [];

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      console.log('Usuario eliminado con ID:', id);
      // Colocar a posterior la lógica para eliminar el usuario
    }
  }
}

