import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound.component';

 const routes: Routes = [

    {
      path: '',
      component: NotfoundComponent,
      children: [
        { path: '', redirectTo: 'notfound', pathMatch: 'full' },
        {
          path: 'notfound',
          component:NotfoundComponent
        }
        
      ],
    }
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class NotFoundRoutingModule {}

