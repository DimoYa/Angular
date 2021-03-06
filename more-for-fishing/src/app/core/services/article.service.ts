import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appKey } from 'src/app/kinvey.tokens';
import Article from '../models/article-model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

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
    return this.http.get<Article>(this.CREATE_POST + `/${id}`);
  }

  getUserArticles() {
    return this.http
    .get<Article[]>(`${this.BASE_URL}/article?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`);
  }

  getArticlesByTitle(title: string) {

    let id = `${this.BASE_URL}/article?query={"headline":"${title}"}&sort={"_kmd.ect": -1}`;
    return this.http
    .get<Article[]>(id);
  }

  deleteArticle(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`);
  }

  editArticle(body: Object, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body);
  }
}