import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:'',redirectTo:'register',pathMatch:'full'},
{path:'cleareye/register',component:RegisterComponent},
{path:'cleareye/information',component:InformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





