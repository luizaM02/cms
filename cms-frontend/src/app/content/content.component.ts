import { Component, OnInit } from '@angular/core';
import {Document} from "../model/Document";
import {ContentService} from "../service/content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  documents: Document[] = [];

  constructor(private contentService : ContentService) {}

  ngOnInit(): void {
    this.contentService.getRootDocuments().subscribe(documents => {
      this.documents = documents;
    })
  }

}
