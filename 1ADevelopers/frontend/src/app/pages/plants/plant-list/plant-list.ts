import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plant-list',
  imports: [RouterModule ],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList {
  plantas: any[] = [];

  eliminarPlanta(id: number) {
    if(confirm('¿Deseas eliminar esta especie del catálogo?')) {
      // Completar la logica para eliminar la planta
    }
  }
}
