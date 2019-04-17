import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Article from 'src/app/core/models/article-model';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  
  articles$: Observable<Article[]>;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles$ = this.articleService.getUserArticles();
  }
  deleteArticle(id: string) {
    this.articleService.deleteArticle(id)
      .subscribe(() => {
        this.articles$ = this.articleService.getUserArticles();
      })
  }
}