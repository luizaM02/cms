import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ViewSwitcherComponent} from './view-switcher/view-switcher.component';
import {ContentComponent} from './content/content.component';
import {TreeViewComponent} from './tree-view/tree-view.component';
import {CardViewComponent} from './card-view/card-view.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {StoreModule} from '@ngrx/store';
import {AppMaterialModule} from "../material/app-material.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewSwitcherComponent,
    ContentComponent,
    TreeViewComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AppMaterialModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
