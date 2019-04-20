import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/core/models/article-model';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-management',
  templateUrl: '../../articles/article-list/article-list.component.html',
  styleUrls: ['./article-management.component.css']
})
export class ArticleManagementComponent implements OnInit {

  articles$: Observable<Article[]>;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }
  deleteArticle(id: string) {
    this.articleService.deleteArticle(id)
      .subscribe(() => {
        this.articles$ = this.articleService.getArticles();
      })
  }
}
