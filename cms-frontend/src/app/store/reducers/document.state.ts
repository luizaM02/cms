import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Document} from "../../model/document.model";
import {ContentService} from "../../service/content.service";
import {SetSelectedDocument} from "../actions/document.actions";
import {Injectable} from "@angular/core";

export interface DocumentStateModel {
  selectedDocument: Document | null;
}

@Injectable()
@State<DocumentStateModel>({
  name: 'documents',
  defaults: {
    selectedDocument: null,
  }
})
export class DocumentState {

  constructor(private contentService: ContentService) {
  }

  @Selector()
  static getSelectedDocument(state: DocumentStateModel) {
    return state.selectedDocument;
  }

  @Action(SetSelectedDocument)
  setSelectedDocument({getState, setState}: StateContext<DocumentStateModel>, {payload}: SetSelectedDocument) {
    const state = getState();
    setState({
      ...state,
      selectedDocument: payload
    });
  }

}
