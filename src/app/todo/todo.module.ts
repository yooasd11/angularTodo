import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './items/add-item/add-item.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ItemsComponent, ItemComponent, AddItemComponent],     // 이 모듈에서 사용하는 컴포넌트
  exports: [ItemsComponent]     // 외부에서도 사용하도록
})
export class TodoModule { }
