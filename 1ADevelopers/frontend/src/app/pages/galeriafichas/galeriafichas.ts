import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { FichasServicio } from '../../../app/services/fichas-servicio';
import { PlantasServicio } from '../../services/plantas-servicio';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-galeriafichas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './galeriafichas.html',
  styleUrls: ['./galeriafichas.css'],
})
export class Galeriafichas implements OnInit {
  private fichasServicio = inject(FichasServicio);
  private plantasServicio = inject(PlantasServicio);

  fichasBackend = signal<any[]>([]);
  especiesBackend = signal<any[]>([]);
  categorias = signal<any[]>([]);

  categoriaSeleccionadaId = signal<number | null>(null);

  fichasCompletas = computed(() => {
    const fichas = this.fichasBackend();
    const especies = this.especiesBackend();

    return fichas.map((ficha) => {
      const especieEncontrada = especies.find(
        (e) => Number(e.id || e.pk) === Number(ficha.especie),
      );

      return {
        ...ficha,
        especieObjeto: especieEncontrada,
      };
    });
  });

  fichasFiltradas = computed(() => {
    const filtroId = this.categoriaSeleccionadaId();
    const todasLasFichas = this.fichasCompletas();

    if (filtroId === null) {
      return todasLasFichas;
    }

    return todasLasFichas.filter((ficha) => {
      const categoriaId = ficha.especieObjeto?.categoria;
      return Number(categoriaId) === Number(filtroId);
    });
  });

  ngOnInit(): void {
    this.cargarContenido();
  }

  cargarContenido(): void {
    forkJoin({
      categorias: this.plantasServicio.getCategorias(),
      especies: this.plantasServicio.getPlantas(),
      fichas: this.fichasServicio.obtenerFichas(),
    }).subscribe({
      next: (resp) => {
        this.categorias.set(resp.categorias);
        this.especiesBackend.set(resp.especies);

        const fichasConEstado = resp.fichas.map((f) => ({ ...f, mostrar: false }));
        this.fichasBackend.set(fichasConEstado);
      },
      error: (err) => console.error('Error cargando datos de los servicios:', err),
    });
  }

  obtenerNombreCategoria(categoriaId: any): string {
    if (!categoriaId) return '';
    const cat = this.categorias().find((c) => Number(c.id || c.pk) === Number(categoriaId));
    return cat ? cat.categoria : '';
  }

  filtrarPorCategoria(id: number | null): void {
    this.categoriaSeleccionadaId.set(id);
  }

  toggleFicha(fichaId: number): void {
    this.fichasBackend.update((lista) => {
      return lista.map((f) => (f.id === fichaId ? { ...f, mostrar: !f.mostrar } : f));
    });
  }
}
