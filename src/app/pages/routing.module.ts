import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

//Componente
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutimgModule { }
