import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {addHeaderInterceptor} from './guard-resolve-interceptor/add-header-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({  }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([addHeaderInterceptor])
    )
  ]
};
