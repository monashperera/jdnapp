import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-type','application/json; charset=utf-8');
    opt = new RequestOptions({
      headers : myHeaders

    })
    return new Promise(resolve =>{
      this.http.get('https://api.pathola.com/freelance_login.php?security=LL9Ny4IF',opt)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
  postr(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    let opt2: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json; charset=utf-8');
    myHeaders.append('Content-type','application/json; charset=utf-8');
    opt2 = new RequestOptions({
      headers : myHeaders

    })
    var MySecurity="LL9Ny4IF";
    var MyEmail="you@yourmail.com";
    var MyPass="12222";
    return new Promise(resolve =>{
      this.http.get("https://api.pathola.com/freelance_login_submit.php?email="+MyEmail+"&password=123124",opt2)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
}
