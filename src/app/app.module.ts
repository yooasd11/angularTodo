import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,    // AppComponent에서 app-todos 태그를 사용하기 위해 모듈 임포트
  ],
  providers: [],
  bootstrap: [AppComponent]   // AppComponent 컴포넌트를 부트스트랩 하겠다. -> index.html의 내용물
})
export class AppModule { }
