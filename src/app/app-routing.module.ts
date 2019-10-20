import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { IndumentariaComponent } from './components/indumentaria/indumentaria.component';

const routes: Routes = [
  {path: 'galeria', component: GaleryComponent},
  {path: 'indumentaria', component: IndumentariaComponent},
  {path: 'contacto', component: ContactComponent},
  {path: '**', component: GaleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
