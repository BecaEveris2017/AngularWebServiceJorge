import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
interface ITodos {
  userId:string;
  id:string;
  title:string;
  completed:string;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[PostService]
})
export class TodosComponent{
  mostrarDivTodos=false;
  Todos:ITodos[]
  postService1;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService) {
    this.postService1=postService;
   }
  funcion_Mostrar(){
    this.spinnerService.show();
    setTimeout(() => {
      this.postService1.getTodos().subscribe(todos=>{console.log(todos)
        this.Todos=todos;
        this.spinnerService.hide();
      });
  }, 2000);
    
  }
}
