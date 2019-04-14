import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appKey } from 'src/app/kinvey.tokens';
import Article from '../models/article-model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${appKey}`;
  private readonly ALL_Articles = `${this.BASE_URL}/article?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/article`;

  createArticle(body: Object) {
    return this.http.post(this.CREATE_POST, body);
  }

  getArticles()  {
    return this.http.get<Article[]>(this.ALL_Articles);
  }

  getArticleById(id: string) {
    let test = this.http.get<Article>(this.CREATE_POST + `/${id}`);
    return test;
  }

  deleteArticle(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`);
  }

  editArticle(body: Object, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body);
  }
}