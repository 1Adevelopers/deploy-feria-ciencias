import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuienesSomos } from './pages/quienes-somos/quienes-somos';
import { Contact } from './pages/contact/contact';
import { Notfound404 } from './pages/notfound404/notfound404';
import { Enproceso } from './shared/enproceso/enproceso';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'quienes-somos', component: QuienesSomos },
  { path: 'galeria', component:  Enproceso},
  { path: 'contacto', component: Contact },
  { path: '**', component: Notfound404 },
];
