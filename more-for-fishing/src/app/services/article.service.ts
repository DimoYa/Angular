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
        content: 'dsadasdasdasdas'
       },
       {
        id: 2,
        picturePath: 'test2', 
        title: 'Test2', 
        creationDate: '2012-12-12',
        content: 'dsaddadasdadadadasdasdasdas'
       }];
  }
}
