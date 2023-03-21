import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [

    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Pruebas Platzi', url: '/pruebas', icon: 'people' },
    { title: 'Curso ionic #6', url: '/curso6', icon: 'bluetooth' },
    { title: 'Json', url: '/json', icon: 'bluetooth' },
    { title: 'Cards', url: '/cards', icon: 'bluetooth' },


  ];

  constructor() {}
}
