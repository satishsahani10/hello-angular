import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { TodosComponent } from './components/todos/todos.component';
import { FlightFormComponent } from './components/flight-form/flight-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';
import { TabComponent } from './components/tab/tab.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: 'tab',
                component: TabComponent
                //,canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'comment-list',
        component: CommentListComponent,
        children: [
            {
                path: 'comment-detail', 
                component: CommentDetailComponent
                //,canActivate: [AuthGuard]
            },
            {
                path: 'comment-item', 
                component: CommentItemComponent
                //,canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'counter',
        component: CounterComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'flight-form',
        component: FlightFormComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'post/:id',
        component: PostComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'todos',
        component: TodosComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: AboutComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
        // ,
        // canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];