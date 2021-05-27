import {Component, OnInit} from '@angular/core';
import {Document} from "../model/Document";
import {ContentService} from "../service/content.service";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  treeControl = new NestedTreeControl<Document>(node => this.getChildDocuments(node.id));
  dataSource = new MatTreeNestedDataSource<Document>();

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.getRootDocuments().subscribe(rootNodes => {
      this.dataSource.data = rootNodes;
    });
  }

  hasChild = (_: number, node: Document) => node.type === "folder";

  getChildDocuments(parentId: number): Observable<Document[]> {
    return this.contentService.getChildDocuments(parentId);
  }

  assetClicked(document: Document) {
    console.debug(document.name);
  }

}
