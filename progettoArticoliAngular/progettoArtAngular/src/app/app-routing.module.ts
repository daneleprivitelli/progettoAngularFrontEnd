import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoloComponent } from './articolo/articolo.component';
import { RecensioneComponent } from './recensione/recensione.component';

const routes: Routes = [
  {path:'articolo', component: ArticoloComponent},
  {path: 'recensione', component: RecensioneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
