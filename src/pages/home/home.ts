import { Component } from '@angular/core';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
import { NavController } from 'ionic-angular';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import{submitform} from'/';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[RestServiceProvider]
})
export class HomePage {

  public resData;
  data: any;

  constructor(public navCtrl: NavController, public restServiceProvider: RestServiceProvider,public http: Http) {
    restServiceProvider.load()
    .then(data => {
      console.log(data);
      this.resData = data;

    })

  }
  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      security: 'LL9Ny4IF',
      email: 'you@yourmail.com',
      password: '123124'
    };
    alert(document.getElementById('email').innerHTML);
    console.log(postParams)


    this.http.post("https://api.pathola.com/freelance_login_submit.php",postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

}
