import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MalWearsComponent } from './malwears/malwears.component';
import { ManComponent } from './man/man.component';
import { WomanComponent } from './woman/woman.component';
import { WomanEditComponent } from './woman/woman-edit/woman-edit.component';
import { WomanStartComponent } from './woman/woman-start/woman-start.component';
import { WomanDetailComponent } from './woman/woman-detail/woman-detail.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path:'malwears', component: MalWearsComponent },
  {path: 'man', component: ManComponent},
  {path: 'woman', component: WomanComponent,
  children: [
  {path: '', component: WomanStartComponent},
  {path: 'new', component: WomanEditComponent},
  {path: ':id', component: WomanDetailComponent},
  {path: ':id/edit', component: WomanEditComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
