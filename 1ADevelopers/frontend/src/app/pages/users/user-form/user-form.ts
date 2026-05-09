import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-form',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  userForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    rol: new FormControl('',[Validators.required])
  });

  onSubmit() {
    if (this.userForm.valid){
      console.log('Datos validados para enviar Django:', this.userForm.value);
      alert('¡Usuario validado con exito!');
    } else {
      this.userForm.markAllAsTouched();
      alert('Por favor, corrige los errores en el formulario.');
    }
  }
}
