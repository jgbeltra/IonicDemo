import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes = [
    {id:"1", title:"Titulo Nota 1", description: "Descripcion Nota 1"},
    {id:"2", title:"Titulo Nota 2", description: "Descripcion Nota 2"},
    {id:"3", title:"Titulo Nota 3", description: "Descripcion Nota 3"}
  ];

  constructor(public navCtrl: NavController) {

  }

}
