import { routes } from './app.routes';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { Routes } from '@angular/router';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // provideServerRoutesConfig(routes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
