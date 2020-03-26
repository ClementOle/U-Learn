import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './modules/test/test.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, BASE_PATH} from '../remote';
import {environment} from '../environments/environment';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { AccueilComponent } from './modules/accueil/accueil.component';
import { BricolageComponent } from './modules/bricolage/bricolage.component';
import {LanguesComponent} from "./modules/langues/langues.component";
import { ListeCoursComponent } from './modules/liste-cours/liste-cours.component';
import { ProgrammationComponent } from './modules/programmation/programmation.component';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        NavBarComponent,
        AccueilComponent,
        BricolageComponent,
        LanguesComponent,
        ListeCoursComponent,
        ProgrammationComponent
    ],
    imports: [
        ApiModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        CKEditorModule,
        ReactiveFormsModule
    ],
    providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
