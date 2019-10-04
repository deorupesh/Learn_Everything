import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeValue } from '@angular/platform-browser'
import { SafePipe } from './safe.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Java/Spring Boot/Angular';
  writer: Observable<any>
  imagePath: String = "assets/images/diwali.gif";
  whatsAppImagePath: String = "assets/images/whatsapp.png";
  name: String = "";
  showName: String = "";
  current_location: any;
  whatsAppUrl: SafeValue;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.updateName();
  }

  updateName() {
    this.showName = this.name;
    //this.current_location = this.sanitizer.bypassSecurityTrustUrl(window.location.href);
    var url = window.location.href;

    if (url.indexOf("?") > -1) {
      url = url.substr(0, url.indexOf("?"));
    }
    this.getUrl(url + '?name=' + this.showName);
    //alert(this.whatsAppUrl);
  }
  // getSaveValues(){
  //   this.getFullResponseForWriter().subscribe(
  //     res => { 
  //       this.writer = res.body;
  //    	      console.log(this.writer);
  //   	      console.log(res.headers.get('Content-Type'));			  
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //  ); 
  // }
  //   getFullResponseForWriter(): Observable<any> {
  //     return this.httpClient.get('/api/saveValues', {
  //      observe: 'response'
  //    });
  // }

  getUrl(current_location: String) {
    this.whatsAppUrl = this.sanitizer.bypassSecurityTrustResourceUrl('whatsapp://send?text=' + current_location);
  }
}
