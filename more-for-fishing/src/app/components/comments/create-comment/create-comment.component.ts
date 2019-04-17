import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  @Input() articleId: string;
  @Output() articleCommentEmitter = new EventEmitter<void>();

  commentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private router: Router) { }

  ngOnInit() {
    this.commentForm = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  addComment() {
    const body = this.commentForm.value;
    body['articleId'] = this.articleId;
    body['author'] = localStorage.getItem('username');

    this.commentService
      .addComment(this.commentForm.value)
      .subscribe(() => {
        this.commentForm.reset();
        this.articleCommentEmitter.emit();
      })
  }

  get c() {
    return this.commentForm.controls;
  }

  get invalid() {
    return this.commentForm.invalid;
  }

}
