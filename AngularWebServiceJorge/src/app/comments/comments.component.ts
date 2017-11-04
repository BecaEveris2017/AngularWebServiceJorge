import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
interface IComment {
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [PostService]
})
export class CommentsComponent {
  comments:IComment[]
  mostrarDivComments= true;
  postService1;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService) {
    this.postService1=postService;
   }
   funcion_CargaComments(){
    this.spinnerService.show();
    setTimeout(() => {
      this.postService1.getComments().subscribe(Comments=>{console.log(Comments)
        this.comments=Comments;
        this.spinnerService.hide();
      });
    }, 2000);
  }
}
