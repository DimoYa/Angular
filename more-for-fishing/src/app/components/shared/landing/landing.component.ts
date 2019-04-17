import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Article from 'src/app/core/models/article-model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  articles$: Observable<Article[]>;
  isLoggedIn: boolean;

  constructor(
    private articleService: ArticleService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.articles$ = this.articleService.getArticles();
    }
  };
}
