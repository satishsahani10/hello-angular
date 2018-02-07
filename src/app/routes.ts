import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { TodosComponent } from './todos/todos.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'post/:id',
        component: PostComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'flight-form',
        component: FlightFormComponent
    },
    {
        path: 'comment-list',
        component: CommentListComponent
    },
    {
        path: 'comment-detail',
        component: CommentDetailComponent
    }
];