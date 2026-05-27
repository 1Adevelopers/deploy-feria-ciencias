import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
const MAX_FILE_SIZE_MB = 5;

function imageUrlValidator(control: AbstractControl): ValidationErrors | null {
  const url: string = control.value?.trim() ?? '';
  if (!url) return null; // required se encarga del campo vacío

  // Formato de URL básico
  try {
    new URL(url);
  } catch {
    return { invalidUrl: true };
  }

  // Extensión permitida (ignora query params)
  const pathname = new URL(url).pathname.toLowerCase();
  const ext = pathname.split('.').pop() ?? '';
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return { invalidExtension: { allowed: ALLOWED_EXTENSIONS.join(', '), actual: ext } };
  }

  return null;
}


interface Categoria {
  id: number;
  categoria: string;
  descripcion: string;
}

interface EspeciePayload {
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  categoria: number;
  imagenes: { url: string }[];
}

@Component({
  selector: 'app-plant-form',
  imports: [ ReactiveFormsModule, HttpClientModule],
  templateUrl: './plant-form.html',
  styleUrl: './plant-form.css',
})
export class PlantForm implements OnInit {
  form!: FormGroup;
  categorias: Categoria[] = [];
  submitStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  errorMessage = '';

  readonly maxImages = 6;
  readonly maxFileSizeMB = MAX_FILE_SIZE_MB;

  private readonly API = 'http://localhost:8000/api/flora';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadCategorias();
  }

  // Formulario

  private buildForm(): void {
    this.form = this.fb.group({
      nombre_comun: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      nombre_cientifico: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
          Validators.pattern(/^[A-Z][a-z]+ [a-z]+.*/), // género Especie
        ],
      ],
      descripcion: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(2000)],
      ],
      categoria: [null, Validators.required],
      imagenes: this.fb.array([this.createImagenControl()]),
    });
  }

  private createImagenControl() {
    return this.fb.group({
      url: ['', [Validators.required, imageUrlValidator]],
      tamano_valido: [true], // se actualiza al hacer HEAD/fetch al recurso
    });
  }

  
  get imagenes(): FormArray {
    return this.form.get('imagenes') as FormArray;
  }

  imageGroup(i: number): FormGroup {
    return this.imagenes.at(i) as FormGroup;
  }

  urlControl(i: number): AbstractControl {
    return this.imageGroup(i).get('url')!;
  }

  getUrlValue(i: number): string {
    return this.urlControl(i).value?.trim() ?? '';
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

  /**
   * Valida el tamaño real del recurso haciendo una petición HEAD.
   * Actualiza el control tamano_valido del grupo correspondiente.
   */
  async checkImageSize(i: number): Promise<void> {
    const url = this.getUrlValue(i);
    if (!url || this.urlControl(i).errors) return;

    try {
      const res = await fetch(url, { method: 'HEAD' });
      const contentLength = res.headers.get('content-length');
      if (contentLength) {
        const sizeBytes = parseInt(contentLength, 10);
        const sizeMB = sizeBytes / (1024 * 1024);
        this.imageGroup(i).patchValue({ tamano_valido: sizeMB <= MAX_FILE_SIZE_MB });
      }
    } catch {
      // No se pudo verificar (CORS, etc.) — se acepta optimistamente
      this.imageGroup(i).patchValue({ tamano_valido: true });
    }
  }

  isSizeInvalid(i: number): boolean {
    return this.imageGroup(i).get('tamano_valido')?.value === false;
  }

  

  private loadCategorias(): void {
    this.http.get<Categoria[]>(`${this.API}/categorias/`).subscribe({
      next: (data) => (this.categorias = data),
      error: () => console.warn('No se pudieron cargar las categorías'),
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

    this.http.post<EspeciePayload>(`${this.API}/especies/`, payload).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.form.reset();
        this.imagenes.clear();
        this.imagenes.push(this.createImagenControl());
      },
      error: (err) => {
        this.submitStatus = 'error';
        this.errorMessage = err?.error?.detail ?? 'Ocurrió un error al guardar la planta.';
      },
    });
  }

  onReset(): void {
    this.form.reset();
    this.imagenes.clear();
    this.imagenes.push(this.createImagenControl());
    this.submitStatus = 'idle';
  }

  

  hasError(field: string, error: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.hasError(error) && (ctrl.dirty || ctrl.touched));
  }

  urlHasError(i: number, error: string): boolean {
    const ctrl = this.urlControl(i);
    return !!(ctrl?.hasError(error) && (ctrl.dirty || ctrl.touched));
  }
}
