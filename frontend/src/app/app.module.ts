import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './modules/test/test.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, BASE_PATH} from '../remote';
import {environment} from '../environments/environment';
import {CKEditorModule} from 'ng2-ckeditor';
import {ReactiveFormsModule} from '@angular/forms';
import {CreationCoursComponent} from './modules/creation-cours/creation-cours/creation-cours.component';
import {LoaderComponent} from './component/loader/loader.component';
import {ModalComponent} from './component/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        CreationCoursComponent,
        LoaderComponent,
        ModalComponent
    ],
    imports: [
        ApiModule,
        AppRoutingModule,
        BrowserModule,
        CKEditorModule,
        ReactiveFormsModule
    ],
    providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
