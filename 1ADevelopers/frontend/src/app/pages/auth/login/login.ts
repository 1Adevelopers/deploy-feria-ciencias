import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class IniciarSesionComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  iniciarSesion() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    if (this.form.valid) {
      if (email === 'admin@gmail.com' && password === '123456') {
        alert('¡Bienvenido a FlorApp!');

        this.router.navigate(['/admin']);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
}
