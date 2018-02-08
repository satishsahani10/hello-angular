import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Services
import { CommentService } from './services/comment.service';
import { BlogService } from './services/blog.service';
import { TodosService } from './services/todos.service';
import { AuthGuard } from './services/auth.guard';
//Import RuterModule
import { RouterModule, Routes } from '@angular/router';
// Import the form module
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { TabComponent } from './components/tab/tab.component';
import { ChildComponent } from './components/child/child.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CounterComponent } from './components/counter/counter.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { FlightFormComponent } from './components/flight-form/flight-form.component';
import { UiButtonDirective } from './directives/ui-button.directive';
import { WhenDirective } from './directives/when.directive';
import { ReversePipe } from './pipes/reverse.pipe';

//Imprt routes
import { routes } from './routes';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TabComponent,
    ChildComponent,
    CommentListComponent,
    CommentItemComponent,
    CounterComponent,
    CommentDetailComponent,
    FlightFormComponent,
    UiButtonDirective,
    WhenDirective,
    ReversePipe,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PostComponent,
    TodosComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // RouterModule used to
    // configure routes
    RouterModule.forRoot(routes)
  ],
  providers: [
    CommentService,
    BlogService,
    TodosService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
