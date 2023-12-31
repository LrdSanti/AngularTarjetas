import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule, FormsModule
  ], exports: [
    SearchBarComponent
  ]
})
export class SearchModule { }
