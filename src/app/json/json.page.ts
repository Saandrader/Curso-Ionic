import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {

  users: any = [];
  permission: boolean = false;
  searchedUser : any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.permission = true;
    console.log("Holaaa");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
      this.searchedUser = this.users;
    });
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

  searchCustomer(event: any){
    const text = event.target.value;
    this.searchedUser = this.users;
    if(text && text.trim() != ''){
      this.searchedUser = this.searchedUser.filter((user: any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase())> -1);
       })

    }

  }

}
