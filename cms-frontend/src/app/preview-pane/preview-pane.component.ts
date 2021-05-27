import { Component, OnInit } from '@angular/core';
import {DocumentState} from "../store/reducers/document.state";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {Document} from "../model/document.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-preview-pane',
  templateUrl: './preview-pane.component.html',
  styleUrls: ['./preview-pane.component.css']
})
export class PreviewPaneComponent implements OnInit {

  @Select(DocumentState.getSelectedDocument) selectedDocument$: Observable<Document>;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  bypassSecurityTrustResourceUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
