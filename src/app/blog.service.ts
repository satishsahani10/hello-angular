import { Injectable } from '@angular/core';
import * as rawData from './db.json';
@Injectable()
export class BlogService {
  data = <any>rawData;
  constructor() { }
  getPosts() {
    return this.data.map(post => {
      return {
        id: post.imageId,
        imageUrl: `https://res.cloudinary.com/christekh/image/upload/c_fit,q_auto,w_300/${post.imageId}`,
        author: post.collector
      }
    })
  }
  byId(id) {
    return this.data
      .filter(post => post.imageId === id)
      .map(post => {
        return {
          id: post.imageId,
          imageUrl: `https://res.cloudinary.com/christekh/image/upload/c_fit,q_auto,w_300/${post.imageId}`,
          author: post.collector,
          content: post.description
        }
      })[0]
  }
}