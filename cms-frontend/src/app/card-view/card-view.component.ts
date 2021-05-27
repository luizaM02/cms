import { Component, OnInit } from '@angular/core';
import {Document} from "../model/Document";
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  documents: Document[] = [];

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getRootDocuments().subscribe(documents => {
      this.documents = documents;
    })
  }

  navigateDown(parentId: number): void {
    this.contentService.getChildDocuments(parentId).subscribe(documents => {
      this.documents = documents;
    })
  }
}
