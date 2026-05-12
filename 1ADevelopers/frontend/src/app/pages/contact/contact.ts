import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarConsulta() {
    const email = this.form.value.email;
    const mensaje = this.form.value.mensaje;

    if (this.form.valid) {
      alert('¡Tu consulta fue enviada con éxito!');
      console.log('Consulta enviada:', { email, mensaje });

      this.router.navigate(['home']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
