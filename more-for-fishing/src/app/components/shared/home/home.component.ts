import { Component, OnInit } from '@angular/core';
import Article from 'src/app//core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articles = this.articleService.getArticles();
    console.log(this.articles);
  };

}
