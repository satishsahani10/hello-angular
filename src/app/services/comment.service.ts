import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentService {
  private commentSelectedSource = new Subject<any>();
  public commentSelected$ = this.commentSelectedSource.asObservable();
  private comments: Array<any> = [
    {
      author: 'solomon',
      content: `TypeScript + Angular is amazing`
    },
    {
      author: 'lorna',
      content: `TypeScript is really awesome`
    },
    {
      author: 'codebeast',
      content: `I'm new to TypeScript`
    }
  ];
  constructor() { }
  getComments() {
    return this.comments;
  }
  removeComment(removableComment) {
    // find the index of the comment
    const index = this.comments.findIndex(
      comment => comment.author === removableComment.author
    );
    // remove the comment from the array
    this.comments.splice(index, 1);
    // return the new array
    return this.comments;
  }

  showComment(comment) {
    this.commentSelectedSource.next(comment);
  }
  parseComment(commentString) {
    const commentArr = commentString.split(':');
    const comment = {
      author: commentArr[0].trim(),
      content: commentArr[1].trim()
    }
    return comment;
  }
  addComment(comment) {
    this.comments.unshift(comment);
  }
}
