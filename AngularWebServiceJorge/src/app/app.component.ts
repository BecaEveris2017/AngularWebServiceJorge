import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beca angular Everis';
  colores = ['blanco','rojo','negro'];
  mostrarListaColores= false;
  funcion_enviar(valorColor){
    console.log(valorColor.value);
    this.colores.push(valorColor.value);
    valorColor.value = "";
    return false;
  }
  funcion_Mostrar(){
    this.mostrarListaColores=!this.mostrarListaColores;
    
  }

}


