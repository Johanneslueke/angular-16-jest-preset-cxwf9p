import { NgModule, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IxMenu, IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, IxModule.forRoot(), RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
