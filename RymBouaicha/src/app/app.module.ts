import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponentComponent } from './residence-component/residence-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";

import {ShowroomComponent} from "./showroom/showroom.component";
import { AddShowroomComponent } from './add-showroom/add-showroom.component';
import { ShowShowroomComponent } from './show-showroom/show-showroom.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponentComponent,
    NavbarComponent,
    FormulaireComponent,
    HomeComponent,

    ShowroomComponent,
    AddShowroomComponent,
    ShowShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
