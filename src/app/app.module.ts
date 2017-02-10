import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import {GitServiceKeys } from './.serviceconfig';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService, GitServiceKeys],
  bootstrap: [AppComponent]
})
export class AppModule { }
