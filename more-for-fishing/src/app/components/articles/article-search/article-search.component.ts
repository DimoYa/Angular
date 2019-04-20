import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Article from 'src/app/core/models/article-model';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  articles$: Observable<Article[]>;
  form: FormGroup;
  searchParams: string;

  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['', Validators.nullValidator],
    });
  }

  search(input: any) {
    this.articles$ = this.articleService.getArticlesByTitle(input['search']);
  }

  clear() {
    this.form.reset();
    this.articles$ = this.articleService.getArticlesByTitle('');
  }
}
