import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { PostComponent } from './blog/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'blog', component: BlogsComponent},
  {path: 'blog/my-best-blog', component: PostComponent},
  {path: 'admin/blog', component: AdminblogComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
