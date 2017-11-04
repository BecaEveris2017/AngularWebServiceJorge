import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

interface IPhotos {
  name:string;
  username:string;
  email:string;
  address:IAddress[];
}
interface IAddress {
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:IGeo[];
}
interface IGeo {
  lat:string;
  lng:string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [PostService],
})
export class UsersComponent {
  users:IPhotos[]
  mostrarDivUsers= false;
  constructor(private postService:PostService,private spinnerService: Ng4LoadingSpinnerService) {
    
   }
  funcion_Mostrar(){
    this.spinnerService.show();
    setTimeout(() => {
    this.postService.getUsers().subscribe(Users=>{console.log(Users)
      this.users=Users;
      this.spinnerService.hide();
    });
  }, 2000);
  }
}
