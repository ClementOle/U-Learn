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
import {RouterModule, Routes} from "@angular/router";
import { BricolageComponent } from './modules/bricolage/bricolage.component';
import {LanguesComponent} from "./modules/langues/langues.component";

const appRoutes: Routes = [
  { path: 'bricolage', component: BricolageComponent },
  { path: 'langues',   component: LanguesComponent },
  { path: '',          component: AccueilComponent},
];

//   { path: '',
//     redirectTo: '/accueil',
//     pathMatch: 'full'
//   },
//   { path: '**', component: AccueilComponent }
// ];

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        NavBarComponent,
        AccueilComponent,
        BricolageComponent,
        LanguesComponent
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
