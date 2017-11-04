import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

interface IAlbums {
  userId:string;
  id:string;
  title:string;
}
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [PostService]
})
export class AlbumsComponent {

  mostrarDivAlbums=false;
  albums:IAlbums[]
  posts;
  mostrarDivComments= false;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService) {
    this.posts=postService;
   }
  funcion_Mostrar(){
    this.spinnerService.show();
    setTimeout(() => {
      this.posts.getAlbums().subscribe(Albums=>{console.log(Albums)
        this.albums=Albums;
      });
        this.spinnerService.hide();
        console.log("termina spinner");
      }, 2000);
  }
}
