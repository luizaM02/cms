import {Document} from "../../model/document.model";

export class SetSelectedDocument {
  static readonly type = '[Document] Set';

  constructor(public payload: Document) {}
}
