import { Component, OnInit } from '@angular/core';
import Article from 'src/app//core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  form: FormGroup;

  constructor(private articleService: ArticleService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['', Validators.nullValidator],
    });

    this.articles = this.articleService.getArticles();
    console.log(this.articles);
  };

}
