import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Header } from './shared/header/header';
import { Navbar } from './shared/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1adevelopers');
}
