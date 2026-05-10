import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeriafichas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeriafichas.html',
  styleUrls: ['./galeriafichas.css']
})
export class Galeriafichas {
  fichas= [
    { nombreComun: 'nombre1', nombreCientifico: 'nombreCientifico1', descripcion: 'descripcion1', mostrar: false },
    { nombreComun: 'nombre2', nombreCientifico: 'nombreCientifico2', descripcion: 'descripcion2', mostrar: false },
    { nombreComun: 'nombre3', nombreCientifico: 'nombreCientifico3', descripcion: 'descripcion3', mostrar: false },
    { nombreComun: 'nombre4', nombreCientifico: 'nombreCientifico4', descripcion: 'descripcion4', mostrar: false },
    { nombreComun: 'nombre5', nombreCientifico: 'nombreCientifico5', descripcion: 'descripcion5', mostrar: false },
    { nombreComun: 'nombre6', nombreCientifico: 'nombreCientifico6', descripcion: 'descripcion6', mostrar: false },
    { nombreComun: 'nombre7', nombreCientifico: 'nombreCientifico7', descripcion: 'descripcion7', mostrar: false },
    { nombreComun: 'nombre8', nombreCientifico: 'nombreCientifico8', descripcion: 'descripcion8', mostrar: false },
    { nombreComun: 'nombre9', nombreCientifico: 'nombreCientifico9', descripcion: 'descripcion9', mostrar: false },
  ];

  seleccionada: any = null;

  mostrarInfo(ficha: any) {
    this.seleccionada = ficha;
  }
}
