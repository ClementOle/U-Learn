import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./modules/accueil/accueil.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BricolageComponent} from "./modules/bricolage/bricolage.component";
import {LanguesComponent} from "./modules/langues/langues.component";

export const appRouteList: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: '**', redirectTo: 'accueil' },
    { path: 'bricolage', component: BricolageComponent },
    { path: 'laangues', component: LanguesComponent }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}
