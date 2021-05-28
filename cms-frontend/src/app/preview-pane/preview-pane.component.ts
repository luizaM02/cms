import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentState} from "../store/state/document.state";
import {Observable, Subject} from "rxjs";
import {Select} from "@ngxs/store";
import {Document} from "../model/document.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-preview-pane',
  templateUrl: './preview-pane.component.html',
  styleUrls: ['./preview-pane.component.css']
})
export class PreviewPaneComponent implements OnInit, OnDestroy {

  @Select(DocumentState.getSelectedDocument) selectedDocument$: Observable<Document>;

  safeUrl: SafeResourceUrl;
  mimeType: string;
  name: string;
  constructor(private sanitizer: DomSanitizer) {
  }

  public unsubscribe$ = new Subject();


  ngOnInit(): void {
    this.selectedDocument$.pipe(takeUntil(this.unsubscribe$)).subscribe(document => {
      if(document) {
        this.safeUrl = this.bypassSecurityTrustResourceUrl(document.url);
        this.mimeType = document.mimeType;
        this.name = document.name;
      }
    })
  }

  bypassSecurityTrustResourceUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
