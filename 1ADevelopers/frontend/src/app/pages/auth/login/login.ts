import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class IniciarSesionComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  iniciarSesion() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.login().subscribe((users:any[]) => {

      const user = users.find((u:any) =>
        u.email === email &&
        u.contrasena === password
      );

      if (user) {
        alert('¡Bienvenido a FlorApp!');

        localStorage.setItem('user', JSON.stringify(user));

        this.router.navigate(['/admin']);
      } else {
        alert('Correo o contraseña incorrectos');
      }

    });
  }
}