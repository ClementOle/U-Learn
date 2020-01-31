import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './modules/test/test.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, BASE_PATH} from '../remote';
import {environment} from '../environments/environment';

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
    providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
