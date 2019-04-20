import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/core/models/article-model';
import { ArticleService } from 'src/app/core/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  
  articles$: Observable<Article[]>;
  isUserPage: boolean;

  constructor(
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.articles$ = this.articleService.getUserArticles();
    let currentUrl = this.router.url;
    this.isUserPage = !currentUrl.includes('admin');
  }
  deleteArticle(id: string) {
    this.articleService.deleteArticle(id)
      .subscribe(() => {
        this.articles$ = this.articleService.getUserArticles();
      })
  }
}
