import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule} from './material-design/material-design.module';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { PostComponent } from './blog/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogsComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
    AdminblogComponent,
    DeleteDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
