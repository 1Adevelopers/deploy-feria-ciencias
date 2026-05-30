import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { PlantaService, Categoria, EspeciePayload } from '../../../services/planta';

const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
const MAX_FILE_SIZE_MB = 5;

// Validador personalizado para asegurar que la URL sea una imagen válida
function imageUrlValidator(control: AbstractControl): ValidationErrors | null {
  const url: string = control.value?.trim() ?? '';
  if (!url) return null;

  try {
    new URL(url);
  } catch {
    return { invalidUrl: true };
  }

  const pathname = new URL(url).pathname.toLowerCase();
  const ext = pathname.split('.').pop() ?? '';
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return { invalidExtension: { allowed: ALLOWED_EXTENSIONS.join(', '), actual: ext } };
  }
  return null;
}

@Component({
  selector: 'app-plant-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Única importación necesaria
  templateUrl: './plant-form.html',
  styleUrl: './plant-form.css',
})
export class PlantForm implements OnInit {
  private fb = inject(FormBuilder);
  private plantaService = inject(PlantaService);

  form!: FormGroup;
  categorias: Categoria[] = [];
  submitStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  errorMessage = '';

  readonly maxImages = 6;

  ngOnInit(): void {
    this.buildForm();
    this.loadCategorias();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      nombre_comun: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      nombre_cientifico: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
          Validators.pattern(/^[A-Z][a-z]+ [a-z]+.*/),
        ],
      ],
      descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
      categoria: [null, Validators.required],
      imagenes: this.fb.array([this.createImagenControl()]),
    });
  }

  private createImagenControl(): FormGroup {
    return this.fb.group({
      url: ['', [Validators.required, imageUrlValidator]],
      tamano_valido: [true],
    });
  }

  get imagenes(): FormArray {
    return this.form.get('imagenes') as FormArray;
  }

  addImagen(): void {
    if (this.imagenes.length < this.maxImages) {
      this.imagenes.push(this.createImagenControl());
    }
  }

  removeImagen(i: number): void {
    if (this.imagenes.length > 1) {
      this.imagenes.removeAt(i);
    }
  }

  private loadCategorias(): void {
    this.plantaService.getCategorias().subscribe({
      next: (data: Categoria[]) => (this.categorias = data),
      error: () => console.warn('Error al cargar categorías'),
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitStatus = 'loading';
    const raw = this.form.getRawValue();

    const payload: EspeciePayload = {
      nombre_comun: raw.nombre_comun.trim(),
      nombre_cientifico: raw.nombre_cientifico.trim(),
      descripcion: raw.descripcion.trim(),
      categoria: Number(raw.categoria),
      imagenes: raw.imagenes
        .filter((img: { url: string }) => img.url?.trim())
        .map((img: { url: string }) => ({ url: img.url.trim() })),
    };

    this.plantaService.crearPlanta(payload).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.form.reset();
        this.imagenes.clear();
        this.imagenes.push(this.createImagenControl());
        alert('Planta guardada exitosamente');
      },
      error: (err: any) => {
        this.submitStatus = 'error';
        this.errorMessage = err?.error?.detail ?? 'Ocurrió un error al guardar la planta.';
        alert(this.errorMessage);
      },
    });
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.hasError(error) && (ctrl.dirty || ctrl.touched));
  }

  onReset(): void {
    this.form.reset();
    this.imagenes.clear();
    this.imagenes.push(this.createImagenControl());
    this.submitStatus = 'idle';
    this.errorMessage = '';
  }
}