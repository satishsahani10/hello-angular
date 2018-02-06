import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Services
import { CommentService } from './comment.service';
import { BlogService } from './blog.service';
import { TodosService } from './todos.service';
//Import RuterModule
import { RouterModule } from '@angular/router';
// Import the form module
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TabComponent } from './tab/tab.component';
import { ChildComponent } from './child/child.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CounterComponent } from './counter/counter.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { UiButtonDirective } from './ui-button.directive';
import { WhenDirective } from './when.directive';
import { ReversePipe } from './reverse.pipe';

//Imprt routes
import { routes } from './routes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { TodosComponent } from './todos/todos.component';


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
    TodosComponent
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
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
