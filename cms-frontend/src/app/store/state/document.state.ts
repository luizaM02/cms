import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Document} from "../../model/document.model";
import {ContentService} from "../../service/content.service";
import {GetChildDocuments, GetRootDocuments, SetSelectedDocument} from "../actions/document.actions";
import {Injectable} from "@angular/core";
import {tap} from "rxjs/internal/operators/tap";

export interface DocumentStateModel {
  selectedDocument: Document | null;
  rootDocuments: Document[] | undefined;
  childDocuments: Document[] | undefined;
}

@Injectable()
@State<DocumentStateModel>({
  name: 'documents',
  defaults: {
    selectedDocument: null,
    rootDocuments: undefined,
    childDocuments: undefined
  }
})
export class DocumentState {

  constructor(private contentService: ContentService) {
  }

  @Selector()
  static getSelectedDocument(state: DocumentStateModel) {
    return state.selectedDocument;
  }

  @Selector()
  static getRootDocuments(state: DocumentStateModel) {
    return state.rootDocuments;
  }

  @Selector()
  static getChildDocuments(state: DocumentStateModel) {
    return state.childDocuments;
  }

  @Action(SetSelectedDocument)
  setSelectedDocument({patchState}: StateContext<DocumentStateModel>, {payload}: SetSelectedDocument) {
    patchState({
      selectedDocument: payload
    });
  }

  @Action(GetChildDocuments)
  getChildDocuments({getState, setState}: StateContext<DocumentStateModel>, {id} : GetChildDocuments) {
    return this.contentService.getChildDocuments(id).pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        childDocuments: result as Document[],
      });
    }));
  }

  @Action(GetRootDocuments)
  getRootDocuments({getState, setState}: StateContext<DocumentStateModel>) {
    return this.contentService.getRootDocuments().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        rootDocuments: result as Document[]
      });
    }));
  }
}
