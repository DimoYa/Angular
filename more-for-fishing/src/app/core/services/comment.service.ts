import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appKey } from 'src/app/kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${appKey}`;
  private readonly CREATE_COMMENT = `${this.BASE_URL}/comments`;

  constructor(
    private http: HttpClient
  ) { }

  getAllForArticle(articleId: string) {
    return this.http.get<Comment[]>(`${this.CREATE_COMMENT}?query={"articleId":"${articleId}"}&sort={"_kmd.ect": -1}`);
  }

  addComment(body: Object) {
    return this.http.post(this.CREATE_COMMENT, body);
  }

  deleteComment(id: string) {
    return this.http.delete(`${this.CREATE_COMMENT}/${id}`);
  }
}
