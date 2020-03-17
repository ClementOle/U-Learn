import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./modules/accueil/accueil.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BricolageComponent} from "./modules/bricolage/bricolage.component";
import {LanguesComponent} from "./modules/langues/langues.component";

export const appRouteList: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'bricolage', component: BricolageComponent },
    { path: 'langues', component: LanguesComponent },
    { path: '**', redirectTo: 'accueil' }  // Si aucun lien trouvé ci-dessus alors redirection vers l'accueil.
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRouteList) // Méthode servant au routing. Prends en paramètres la liste de Routes
    ]
})
export class AppRoutingModule {
}
