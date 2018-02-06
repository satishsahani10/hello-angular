import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommentService } from './comment.service';

// Import the form module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TabComponent } from './tab/tab.component';
import { ChildComponent } from './child/child.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CounterComponent } from './counter/counter.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { FlightFormComponent } from './flight-form/flight-form.component';


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
    FlightFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
