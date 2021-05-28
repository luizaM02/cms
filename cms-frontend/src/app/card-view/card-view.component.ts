import {Component, OnInit} from '@angular/core';
import {Document} from "../model/document.model";
import {ContentService} from "../service/content.service";
import {Observable, Subscription} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {GetChildDocuments, GetRootDocuments, SetSelectedDocument} from "../store/actions/document.actions";
import {DocumentState} from "../store/state/document.state";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Select(DocumentState.getRootDocuments) documents$: Observable<Document[]>;
  @Select(DocumentState.getChildDocuments) childDocuments$: Observable<Document[]>;

  currentDocuments: Document[];
  subscription: Subscription | null = null;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscription = this.store.dispatch(new GetRootDocuments()).subscribe();

    this.documents$.subscribe(documents =>
      this.currentDocuments = documents);
  }

  navigateDown(parentId: number): void {
    this.store.dispatch(new GetChildDocuments(parentId));

    this.childDocuments$.subscribe(documents => {
      this.currentDocuments = documents;
    })
  }

  selectDocument(document: Document) {
    if (document.type === "folder") {
      this.navigateDown(document.id);
    } else {
      this.store.dispatch(new SetSelectedDocument(document));
    }
  }
}
