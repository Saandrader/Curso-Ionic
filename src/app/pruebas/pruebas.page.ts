import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {

  familia :any = [];




  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.familia = res;
    });
  }


  name = 'Samuel';
  inputText = 'Vanessa';
  img ='https://source.unsplash.com/random'
  btnDisabled = true;
  ageNumber = 10;
  newName ='';

  person = {
    name : "gabriela",
    names: ['Daniel', 'Trosky', 'Oliver'],
    age : 10
  }

  toggleBtn(){
    this.btnDisabled = !this.btnDisabled;
  }

  changeName(event : Event){
    const element = event.target as HTMLInputElement
    this.person.name = element.value;
  }

  increaseAge(){
  this.person.age = Number(this.person.age) + 1;
  }

  onEnter(event:any){
    if (event.keyCode == 13){
      this.addName();
    }
  }



  addName(){
    this.person.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.person.names.splice(index,1);
  }




  getUsers(){
    return this.http
    .get("assets/files/customers.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

}
