import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, BASE_PATH} from '../remote';
import {environment} from '../environments/environment';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from './modules/nav-bar/nav-bar.component';
import {AccueilComponent} from './modules/accueil/accueil.component';
import {ListeCoursComponent} from './modules/liste-cours/liste-cours.component';
import {CreationCoursComponent} from './modules/creation-cours/creation-cours/creation-cours.component';
import {LoaderComponent} from './component/loader/loader.component';
import {ModalComponent} from './component/modal/modal.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {GlobalInterceptor} from './services/global-interceptor';
import {ContenuCoursComponent} from './modules/contenu-cours/contenu-cours.component';
import {FooterComponent} from './modules/footer/footer.component';
import {CreationQuizComponent} from './modules/creation-cours/creation-quiz/creation-quiz.component';
import {ConnexionComponent} from './modules/connexion/connexion.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        AccueilComponent,
        ListeCoursComponent,
        CreationCoursComponent,
        LoaderComponent,
        ContenuCoursComponent,
        ModalComponent,
        ModalComponent,
        FooterComponent,
        CreationQuizComponent,
        ConnexionComponent
    ],
    imports: [
        ApiModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        CKEditorModule,
        ReactiveFormsModule
    ],
    providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}, {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalInterceptor,
        multi: true
    }, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
