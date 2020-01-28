import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './modules/test/test.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule} from '../remote';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        ApiModule,
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
