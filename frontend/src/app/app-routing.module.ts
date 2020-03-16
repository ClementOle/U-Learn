import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './modules/test/test.component';
import {CreationCoursComponent} from './modules/creation-cours/creation-cours/creation-cours.component';

export const appRouteList: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'creation-cours',
        component: CreationCoursComponent
    },
    {
        path: '**',
        redirectTo: 'creation-cours'
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
