import { Component, OnInit, Input } from '@angular/core';
import Article from 'src/app/core/models/article-model';

@Component({
  selector: 'app-article-user',
  templateUrl: './article-user.component.html',
  styleUrls: ['./article-user.component.css']
})
export class ArticleUserComponent implements OnInit {

  @Input('article')
  article: Article;
  constructor() { }

  ngOnInit() {
  }

}
