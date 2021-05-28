import {Document} from "../../model/document.model";

export class SetSelectedDocument {
  static readonly type = '[Document] Set';

  constructor(public payload: Document) {}
}

export class GetChildDocuments {
  static readonly type = '[Document] Get';

  constructor(public id: number) {

  }
}

export class GetRootDocuments {
  static readonly type = '[Document] Get Roots';

}
