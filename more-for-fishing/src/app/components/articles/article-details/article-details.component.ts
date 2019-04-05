import { Component, OnInit } from '@angular/core';
import ArticleDetails from 'src/app/models/article-details';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import Article from 'src/app/models/article';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  articleId: string;
  articleDetails: ArticleDetails;
  articleComments: string;
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService) {
    this.articleId = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.articleDetails = this.articleService.getArticleById(this.articleId);
    console.log(this.articleDetails);
  }
}

