import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts;
  
  constructor(
    private blogService: BlogService,
    private router:Router
  ) { }
  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
  showPost(id) {
    this.router.navigate(['/post', id]);
  }
}
