import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http/http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  declarations: [SearchComponent],
  providers: [HttpService],
  exports: [SearchComponent]
})
export class GithubModule { }
