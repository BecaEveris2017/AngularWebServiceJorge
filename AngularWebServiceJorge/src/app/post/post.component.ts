import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

interface IPost {
  id:string;
  title:string;
  body:string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent {

  posts : IPost[]
  postService1;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService){
    this.postService1=postService;

  }
  funcion_cargapost(){
    this.spinnerService.show();
    setTimeout(() => {
      this.postService1.getPost().subscribe(posts=>{console.log(posts)
        this.posts=posts;
        this.spinnerService.hide();
      });
    }, 2000);
  }
  // ngOnInit() {
  // }

}
