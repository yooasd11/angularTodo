import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http/http.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  declarations: [SearchComponent, UserComponent],
  providers: [HttpService],
  exports: [SearchComponent]
})
export class GithubModule { }
