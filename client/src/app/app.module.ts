import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";

// COMPONENTS
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


// SERVICES
import { ModelService } from "./services/model.service";
import { AuthService } from "./services/auth.service";
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { SingleViewComponent } from './components/single-view/single-view.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

// define routes
const appRoutes: Routes = [
  { path: "", component: MainpageComponent},
  { path: "home", component: HomeComponent },
  { path: "createpoll", component: CreatePollComponent },
  { path: "view/:username", component: SingleViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreatePollComponent,
    SingleViewComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [ModelService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
