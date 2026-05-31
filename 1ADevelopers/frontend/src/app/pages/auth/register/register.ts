import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  registrar() {
    const email = this.form.value.email;
    const username = this.form.value.username;
    const password = this.form.value.password;
    const confirmPassword = this.form.value.confirmPassword;

    if (this.form.valid) {

      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const userData = { email, username, password };

      this.authService.register(userData).subscribe({

           next:(response) => {

          alert('Registro exitoso. Ahora puedes iniciar sesión.');
          this.router.navigate(['/login']);
        },

        error:(error) => {

          console.error('Error en el registro:', error);
          alert('Error en el registro. Por favor, intenta nuevamente.');
        }
     
     
      }

  

      );

    } else {
      this.form.markAllAsTouched();
    }
  }
}