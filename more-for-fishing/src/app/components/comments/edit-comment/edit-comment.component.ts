import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() commentId: string;
  @Output() articleCommentEmitter = new EventEmitter<void>();
  articleId : string;

  @ViewChild('f') updateCommentForm: FormGroup;
  commentInfo : Comment;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateCommentForm = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.commentId = this.route.snapshot.params['id'];
    this.commentService.getCommentById(this.commentId)
      .subscribe((data) => {
        this.commentInfo = data;
      });
  }

  updateComment() {
    const body = this.updateCommentForm.value;
    body['_id'] = this.commentInfo['_id'];
    body['articleId'] = this.commentInfo['articleId'];
    body['author'] = this.commentInfo['author'];
    body['modified'] = localStorage.getItem('username');

    this.commentService.editComment(body, this.commentId)
      .subscribe(() => {
        this.updateCommentForm.reset();
        this.articleCommentEmitter.emit();
        this.router.navigate([ `/articles/details/${this.commentInfo['articleId']}`]);
      })
  }

  get c() {
    return this.updateCommentForm.controls;
  }

  get invalid() {
    return this.updateCommentForm.invalid;
  }

}
