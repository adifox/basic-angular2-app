import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { HeroesService } from './services/heroes.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { LookedupComponent } from './components/lookedup/lookedup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    LookedupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
