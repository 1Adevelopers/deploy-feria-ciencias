import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plant-list',
  standalone:true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList {
  plantas: any[] = [];

  eliminarPlanta(id: number) {
    if(confirm('¿Deseas eliminar esta especie del catálogo?')) {
      // Lógica futura de borrado
    }
  }
}
