import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		MnFullpageModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
