import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';

const routes: Routes = [
  { path:'', redirectTo: 'breeds', pathMatch:'full' },
  { path:'breeds', component: BreedsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
