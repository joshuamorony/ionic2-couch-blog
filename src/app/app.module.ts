import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewPostPage } from '../pages/view-post/view-post';
import { AddPostPage } from '../pages/add-post/add-post';
import { Data } from '../providers/data';
import { Posts } from '../providers/posts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, Posts]
})
export class AppModule {}
