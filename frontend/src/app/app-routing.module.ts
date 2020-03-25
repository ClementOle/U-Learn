import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./modules/accueil/accueil.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BricolageComponent} from "./modules/bricolage/bricolage.component";
import {LanguesComponent} from "./modules/langues/langues.component";
import {ListeCoursComponent} from "./modules/liste-cours/liste-cours.component";

export const appRouteList: Routes = [
    // { path: 'accueil', component: AccueilComponent },
    // { path: 'bricolage/:id', component: BricolageComponent },
    // { path: 'langues', component: LanguesComponent },
    { path: 'liste_cours/:toto', component: ListeCoursComponent},
  // 'toto' doit correspondre au terme passé en paramètre  du params.get('toto') du liste-cours.component.ts
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
