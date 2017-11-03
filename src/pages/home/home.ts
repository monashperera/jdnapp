import { Component } from '@angular/core';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[RestServiceProvider]
})
export class HomePage {

  public resData;

  constructor(public navCtrl: NavController, public restServiceProvider: RestServiceProvider) {
    restServiceProvider.load()
    .then(data => {
      console.log(data);
      this.resData = data;

    })

  }
  postReq(){
    this.restServiceProvider.postr()
    .then(data => {
      console.log(data);
      this.resData = data;

    })
  }

}
