import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import Article from '../models/article-model';
import { ArticleService } from '../services/article.service';

@Injectable({
    providedIn: 'root'
})
export class SingleArticleResolver implements Resolve<Article> {
  constructor(private articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id = route.params['id'];

    return this.articleService.getArticleById(id);
  }
}