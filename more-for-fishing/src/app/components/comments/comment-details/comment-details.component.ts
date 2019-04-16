import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Article from 'src/app/core/models/article-model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  
  @Input() commentInfo : Comment; 
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

  isAuthor(commentInfo: object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('id');
  }
}