import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Document} from '../model/Document';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient) {

  }

  getRootDocuments(): Observable<Document[]> {
    return this.httpClient.request<Document[]>("GET", "/api/documents", {responseType: "json"});
  }

  getChildDocuments(parentId: number): Observable<Document[]> {
    return this.httpClient.request<Document[]>("GET", `/api/documents/${parentId}`, {responseType: "json"});
  }
}
