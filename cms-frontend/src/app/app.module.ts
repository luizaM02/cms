import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ViewSwitcherComponent} from './view-switcher/view-switcher.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {ContentComponent} from './content/content.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";

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
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
