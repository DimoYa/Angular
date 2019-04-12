import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      headline: ['', [Validators.required, Validators.maxLength(25)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.nullValidator]]
    })
  }

  createArticle() {
    const body = this.form.value;
    body['author'] = localStorage.getItem('username');

    this.articleService.createArticle(body)
      .subscribe(() => {
        this.router.navigate(['/home']);
      })
  }
  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}