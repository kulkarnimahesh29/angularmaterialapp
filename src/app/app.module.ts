import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
      { path: '**', redirectTo: 'demo'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
