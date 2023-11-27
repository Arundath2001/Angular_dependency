import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { OfficialComponent } from './official/official.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'official', component: OfficialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
