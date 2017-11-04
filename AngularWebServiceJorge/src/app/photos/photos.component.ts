import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

interface IPhotos {
  albumId:string;
  id:string;
  title:string;
  url:string;
  thumbnailUrl:string;
}

@Component({
  
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PostService],
  
})
export class PhotosComponent {
  photos:IPhotos[]
  mostrarDivPhotos= true;
  post;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService) {
    this.post=postService;
   }
  funcion_cargafotos(){
    this.spinnerService.show();
    setTimeout(() => {
      this.post.getPhotos().subscribe(Photos=>{
        console.log(Photos);
        this.photos=Photos;
        this.spinnerService.hide();
        console.log("termina spinner");
      });
  }, 2000);  
  }
}
