import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { ComponentePostComponent } from './componente-post/componente-post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { TabModule } from 'angular-tabs-component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    ComponentePostComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    PostComponent,
    
  ],
  imports: [
    Ng4LoadingSpinnerModule,
    BrowserModule,
    HttpModule,
    TabModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
