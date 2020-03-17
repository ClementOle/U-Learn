import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./modules/accueil/accueil.component";

export const appRouteList: Routes = [
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: '**',
        redirectTo: 'accueil'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}
