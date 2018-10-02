import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { RouterModule, Router } from '@angular/router'
import { ItemsComponent } from './todo/items/items.component';
import { SearchComponent } from './github/search/search.component';
import { GithubModule } from './github/github.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'todo',
        component: ItemsComponent
      },
      {
        path: 'github',
        component: SearchComponent
      }
    ]),
    TodoModule,    // AppComponent에서 app-todos 태그를 사용하기 위해 모듈 임포트
    GithubModule,
  ],
  providers: [],
  bootstrap: [AppComponent]   // AppComponent 컴포넌트를 부트스트랩 하겠다. -> index.html의 내용물
})
export class AppModule { }
