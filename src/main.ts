import { enableProdModeOtroTema } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic2 } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic3 } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production === true) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

for (let index = 0; index <= array.length; index++) {
  const element = array[index];
}
