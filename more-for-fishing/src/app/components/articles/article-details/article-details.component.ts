import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import Article from 'src/app/core/models/article-model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {

  @Input('article')
  article: Article;

  constructor(private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.articleService.getArticleById(id).subscribe((data) => {
        this.article = data;
      })
    })
  }

  isAuthor(article: Article) {
    return article['_acl']['creator'] === localStorage.getItem('id');
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id)
      .subscribe(() => {
        this.router.navigate(['/articles']);
      })
  }
}

