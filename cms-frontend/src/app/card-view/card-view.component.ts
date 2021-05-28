import {Component, OnDestroy, OnInit} from '@angular/core';
import {Document} from "../model/document.model";
import {Observable, Subject, Subscription} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {GetChildDocuments, GetRootDocuments, SetSelectedDocument} from "../store/actions/document.actions";
import {DocumentState} from "../store/state/document.state";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit, OnDestroy {
  @Select(DocumentState.getRootDocuments) documents$!: Observable<Document[]>;
  @Select(DocumentState.getChildDocuments) childDocuments$!: Observable<Document[]>;

  currentDocuments: Document[] | undefined;
  subscription: Subscription | null = null;

  constructor(private store: Store) {
  }

  public unsubscribe$ = new Subject();


  ngOnInit(): void {
    this.subscription = this.store.dispatch(new GetRootDocuments()).subscribe();

    this.documents$.pipe(takeUntil(this.unsubscribe$)).subscribe(documents => {
      if(documents) {
        this.currentDocuments = documents;
    }
    });

    this.childDocuments$.pipe(takeUntil(this.unsubscribe$)).subscribe(documents => {
      if(documents) {
        this.currentDocuments = documents;
      }
    });
  }

  navigateDown(parentId: number): void {
    this.store.dispatch(new GetChildDocuments(parentId));
  }

  selectDocument(document: Document) {
    if (document.type === "folder") {
      this.navigateDown(document.id);
    } else {
      this.store.dispatch(new SetSelectedDocument(document));
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
