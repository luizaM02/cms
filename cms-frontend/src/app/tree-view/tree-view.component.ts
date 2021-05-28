import {Component, OnInit} from '@angular/core';
import {Document} from "../model/document.model";
import {ContentService} from "../service/content.service";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {GetRootDocuments, SetSelectedDocument} from "../store/actions/document.actions";
import {DocumentState} from "../store/state/document.state";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Select(DocumentState.getRootDocuments) documents$: Observable<Document[]>;

  treeControl = new NestedTreeControl<Document>(node => this.getChildDocuments(node.id));
  dataSource = new MatTreeNestedDataSource<Document>();

  constructor(private contentService: ContentService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetRootDocuments());

    this.documents$.subscribe(rootNodes => {
      this.dataSource.data = rootNodes;
    });
  }

  hasChild = (_: number, node: Document) => node.type === "folder";

  getChildDocuments(parentId: number): Observable<Document[]> {
    return this.contentService.getChildDocuments(parentId);
  }

  assetClicked(document: Document) {
    this.store.dispatch(new SetSelectedDocument(document));
  }

}
