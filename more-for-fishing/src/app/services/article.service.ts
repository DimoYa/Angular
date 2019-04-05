import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Article from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles()  {
    return [
      {
        id: 1,
        picturePath: 'test', 
        title: 'Test', 
        creationDate: '2012-12-12',
        content: 'dsadasdasdasdas',
        comments: ['test', 'test2']
       },
       {
        id: 2,
        picturePath: 'test2', 
        title: 'Test2', 
        creationDate: '2012-12-12',
        content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. ',
        comments: ['test', 'test2']
       }];
  }

  getArticleById(id: string) {
    return this.getArticles().find(i => i.id === Number(id));
  }
}
