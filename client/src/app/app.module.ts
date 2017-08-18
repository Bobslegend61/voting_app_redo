import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

// SERVICES
import { ModelService } from "./services/model.service";

// define routes
const appRoutes: Routes = [
  { path: "", component: MainpageComponent},
  { path: "home", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
