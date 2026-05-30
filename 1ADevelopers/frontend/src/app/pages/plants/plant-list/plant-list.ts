import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantasServicio } from '../../../services/plantas-servicio';

@Component({
  selector: 'app-plant-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList implements OnInit {
  private plantasServicio = inject(PlantasServicio);
  plantas: any[] = [];

  ngOnInit(): void {
    this.loadPlantas();
  }

  private loadPlantas(): void {
    this.plantasServicio.getPlantas().subscribe({
    next: (data) => {
      console.log('Plantas recibidas desde la API:', data);
      this.plantas = data;
    },
    error: (err) => {
      console.error('Error al cargar las plantas:', err);
      alert('Error al cargar las plantas.');
    }
  });
}

  eliminarPlanta(id: number) : void {
    if(confirm('¿Deseas eliminar esta especie del catálogo?')) {
      this.plantasServicio.eliminarPlanta(id).subscribe({
        next: () => this.loadPlantas(),
        error: () => alert('Error: No se pudo eliminar la planta.'),
      });
    }
  }

    trackById(index: number, item: any): number {
    return item.id;
  }
}