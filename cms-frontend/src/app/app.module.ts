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
import {AppMaterialModule} from "../material/app-material.module";
import {PreviewPaneComponent} from './preview-pane/preview-pane.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {DocumentState} from "./store/reducers/document.state";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewSwitcherComponent,
    ContentComponent,
    TreeViewComponent,
    CardViewComponent,
    PreviewPaneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AppMaterialModule,
    NgxsModule.forRoot([DocumentState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
