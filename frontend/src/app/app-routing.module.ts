import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CreationCoursComponent} from './modules/creation-cours/creation-cours/creation-cours.component';
import {ListeCoursComponent} from './modules/liste-cours/liste-cours.component';
import {AccueilComponent} from './modules/accueil/accueil.component';

export const appRouteList: Routes = [
    {
        path: 'liste-cours',
        component: ListeCoursComponent
    },

    // 'paramChemin' doit correspondre au terme passé en paramètre  du params.get('paramChemin') du liste-cours.component.ts
    {
        path: 'creation-cours',
        component: CreationCoursComponent
    },
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: '**',
        redirectTo: 'accueil'
    }  // Si aucun lien trouvé ci-dessus alors redirection vers l'accueil.
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
