import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialBaseModule } from '@fireflysemantics/material-base-module';
import { DataTableComponentModule } from 'projects/table/src/lib/data-table/data-table.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableTestComponent } from './table-test/table-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TableTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialBaseModule,
    DataTableComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
