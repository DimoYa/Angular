import { Component, OnInit, Input } from '@angular/core';
import Article from 'src/app/core/models/article-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('article')
  article: Article;
  constructor() { }

  ngOnInit() {
  }
}
