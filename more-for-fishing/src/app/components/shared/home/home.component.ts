import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Article from 'src/app/core/models/article-model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles$: Observable<Article[]>;
  form: FormGroup;
  isLoggedIn: boolean;

  constructor(
    private articleService: ArticleService,
    private authService: AuthenticationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      search: ['', Validators.nullValidator],
    });
    
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.articles$ = this.articleService.getArticles();
    }
  };
}
