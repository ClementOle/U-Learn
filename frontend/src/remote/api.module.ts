import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Configuration} from './configuration';

import {TestService} from './api/test.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    exports: [],
    providers: [
        TestService]
})
export class ApiModule {
    constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }

    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [{provide: Configuration, useFactory: configurationFactory}]
        };
    }
}
