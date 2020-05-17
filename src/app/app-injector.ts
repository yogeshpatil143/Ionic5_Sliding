import { Injector } from '@angular/core';

export class AppInjecterService {
    private static INJECTER: Injector;

    static set injector(injector: Injector) {
        this.INJECTER = injector;
    }

    static get injector(): Injector {
        return this.INJECTER;
    }
}