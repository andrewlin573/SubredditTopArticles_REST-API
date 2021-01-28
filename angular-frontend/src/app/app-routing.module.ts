import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewTopPostsComponent } from './view-top-posts/view-top-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'top-posts/:subreddit',
    component: ViewTopPostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
