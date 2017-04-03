import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewPostPage } from '../pages/view-post/view-post';
import { AddPostPage } from '../pages/add-post/add-post';
import { AddCommentPage } from '../pages/add-comment/add-comment';
import { Data } from '../providers/data';
import { Posts } from '../providers/posts';
import { Comments } from '../providers/comments';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage,
    AddCommentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage,
    AddCommentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, Posts, Comments]
})
export class AppModule {}
