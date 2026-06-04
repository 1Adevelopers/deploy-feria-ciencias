import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario';


@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEditMode = false;
  userId: number | null = null;

  userForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    rol: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isEditMode = true; 
      this.userId = Number(id);
    }
  }

  onSubmit() {
    if (this.userForm.valid){
      const formValue = this.userForm.value;

      const datosParaDjango: any = {
        nombre: formValue.nombre,
        apellido: formValue.apellido,
        email: formValue.email,
        contrasena: formValue.password,
        rol: formValue.rol === 'docente' ? 2 : 1
      };
      if (this.isEditMode && this.userId !== null) {
        // MODO EDICIÓN: Llamamos a actualizarUsuario pasándole el ID
        this.usuarioService.actualizarUsuario(this.userId, datosParaDjango).subscribe({
          next: () => {
            alert('¡Usuario actualizado con éxito!');
            this.router.navigate(['/admin/usuarios']); 
          },
          error: (err) => {
            console.error('Error al actualizar:', err);
            alert('Hubo un error al actualizar el usuario.');
          }
        });
      } else {
        
        this.usuarioService.crearUsuario(datosParaDjango).subscribe({
          next: () => {
            alert('¡Usuario creado con éxito!');
            this.router.navigate(['/admin/usuarios']); 
          },
          error: (err) => {
            console.error('Error devuelto por Django:', err);
            alert('Hubo un error al guardar el usuario en la base de datos.');
          }
        });
      }

    } else {
      this.userForm.markAllAsTouched();
      alert('Por favor, corrige los errores en el formulario.');
    }
  }
}
