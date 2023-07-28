import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"video",component:VideoComponent},
   {path:"",component:HomeComponent},
   {path:"home",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
