import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeHomePageComponent } from './resume-home-page/resume-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeHomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
