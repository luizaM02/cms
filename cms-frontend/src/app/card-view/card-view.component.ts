import {Component, OnInit} from '@angular/core';
import {Document} from "../model/document.model";
import {ContentService} from "../service/content.service";
import {Subscription} from "rxjs";
import {Store} from "@ngxs/store";
import {SetSelectedDocument} from "../store/actions/document.actions";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  documents: Document[] = [];
  subscription: Subscription | null = null;

  constructor(private contentService: ContentService, private store: Store) {
  }

  ngOnInit(): void {
    this.subscription = this.contentService.getRootDocuments().subscribe(documents => {
      this.documents = documents;
    })
  }

  navigateDown(parentId: number): void {
    this.contentService.getChildDocuments(parentId).subscribe(documents => {
      this.documents = documents;
    })
  }

  selectDocument(document: Document) {
    if(document.type === "folder") {
      this.navigateDown(document.id);
    } else {
      this.store.dispatch(new SetSelectedDocument(document));
    }
  }
}
