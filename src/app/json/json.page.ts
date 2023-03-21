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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.permission = false;
    console.log("Holaaa");
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
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

}
