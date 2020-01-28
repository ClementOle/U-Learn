import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './modules/test/test.component';

export const appRouteList: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '**',
        redirectTo: 'test'
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
