// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { OfficialComponent } from './official/official.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    OfficialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
