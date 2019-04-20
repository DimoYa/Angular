import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/article.service';
import Article from 'src/app/core/models/article-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  @ViewChild('f') editArticleForm: FormGroup;
  article: Article;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.editArticleForm = this.fb.group({
      headline: ['', [Validators.required, Validators.maxLength(25)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.nullValidator]]
    });

    const id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(id)
      .subscribe((data) => {
        this.article = data;
      });
  }

  editArticle() {
    const body = this.editArticleForm.value;
    body['author'] = this.article['author'];
    body['modified'] = localStorage.getItem('username');

    this.articleService.editArticle(body, this.article['_id'])
      .subscribe(() => {
        this.router.navigate([ '/articles' ]);
      })
  }
  get f() {
    return this.editArticleForm.controls;
  }

  get invalid() {
    return this.editArticleForm.invalid;
  }
}
