import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  name = 'Samuel';
  img ='https://source.unsplash.com/random'
  btnDisabled = true;
  friends = {
    career : "ciencias politicas",
    name : "gabriela"

  }


}
