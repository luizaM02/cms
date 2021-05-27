import {Component, OnDestroy, OnInit} from '@angular/core';
import {Document} from "../model/Document";
import {ContentService} from "../service/content.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  documents: Document[] = [];
  subscription: Subscription | null = null;

  constructor(private contentService: ContentService) {
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
}
