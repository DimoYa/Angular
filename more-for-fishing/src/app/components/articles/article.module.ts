import { NgModule } from '@angular/core';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/article.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { CreateCommentComponent } from '../comments/create-comment/create-comment.component';
import { CommentDetailsComponent } from '../comments/comment-details/comment-details.component';
import { EditCommentComponent } from '../comments/edit-comment/edit-comment.component';
import { LandingComponent } from '../shared/landing/landing.component';
import { RouterModule } from '@angular/router';
import { ArticleUserComponent } from './article-user/article-user.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleDetailsComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ArticleListComponent,
    ArticleSearchComponent,
    CreateCommentComponent,
    CommentDetailsComponent,
    EditCommentComponent,
    LandingComponent,
    ArticleUserComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    ArticleService,
    CommentService
  ],
  exports: [
    ArticleSearchComponent,
    ArticleComponent,
    LandingComponent,
    ArticleUserComponent
    ]
})
export class ArticleModule { }
