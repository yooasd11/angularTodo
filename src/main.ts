import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 실행될수 있는 자바스크립트 코드로 컴파일하는 걸 브라우저에서 동적으로 하겠다.
platformBrowserDynamic().bootstrapModule(AppModule)   // AppModule 모듈을 부트스트랩으로 사용한다
  .catch(err => console.error(err));