import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import Article from 'src/app/core/models/article-model';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {

  @Input('article')
  article: Article;
  comments$: Observable<Comment[]>;
  id: string;
  isExpanded = false;

  constructor(private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.articleService.getArticleById(this.id).subscribe((data) => {
        this.article = data;

        this.comments$ = this.commentService.getAllForArticle(this.id);
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

  loadComments() {
    this.comments$ = this.commentService.getAllForArticle(this.id);
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }
}

