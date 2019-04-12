import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import Article from 'src/app/core/models/article-model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, DoCheck {
 

  @Input() article: Article;
  currentId: string;
  isAuthor: boolean;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router) {
  }

  ngDoCheck(): void {
    this.isAuthor = this.article['_acl']['creator'] === localStorage.getItem('id');
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.currentId = data['id'];
      this.articleService.getArticleById(this.currentId).subscribe((data) => {
        this.article = data;
      })
    })
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.currentId)
      .subscribe(() => {
        this.router.navigate(['/home']);
      })
  }
}

