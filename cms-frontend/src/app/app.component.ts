import {Component, OnInit} from '@angular/core';
import {ContentService} from "./service/content.service";
import {Document} from "./model/Document";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Browse Your Files';
  documents: Document[] = [];

  constructor(private contentService : ContentService) {}

  ngOnInit(): void {
    this.contentService.getRootDocuments().subscribe(documents => {
      this.documents = documents;
    })
  }

}
