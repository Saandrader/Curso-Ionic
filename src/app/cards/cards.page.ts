import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  space: any = [];
  permission: boolean = true;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.permission = true;
    console.log("Holaaa");
    this.getSpace().subscribe(res=>{
      console.log("Res",res)
      this.space = res;
    });
  }

  getSpace(){
    return this.http
    .get("assets/files/space.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'constelacion seleccionada',
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "Borrar foto",
      message:"Se ha borrado la foto de la constelacion correctamente",
      buttons:["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: "Borrar foto",
      message:"Se ha borrado la foto de la constelacion correctamente",
      buttons:[
        {
          text: 'No',
          handler: () =>
          console.log("No cancel")
        },
        {
          text: 'Si',
          handler: () =>
          console.log("Eliminada")
        }
      ],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
