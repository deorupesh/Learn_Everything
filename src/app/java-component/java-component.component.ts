import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {DomSanitizer,SafeResourceUrl, SafeValue} from '@angular/platform-browser'
import {SafePipe} from '../safe.component'

@Component({
  selector: 'app-java-component',
  templateUrl: './java-component.component.html',
  styleUrls: ['./java-component.component.css']
})
export class JavaComponentComponent implements OnInit {
 
  title = 'Java/Spring Boot/Angular';
  writer: Observable<any>
  imagePath:String = "assets/images/diwali.gif";
  whatsAppImagePath:String = "assets/images/whatsapp.png";
  name:String="";
  currentDate:Date;
  //gudhipadavaDate:Date=new Date(2019,04,06);
  showName:String="";
  current_location:any;
  whatsAppUrl:SafeValue;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { 
  } 

  ngOnInit() {
 
    this.currentDate = new Date();
    // if(this.currentDate<=this.gudhipadavaDate){

    // }

    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        this.name = params['name'];
      });
      this.updateName();
  }

  updateName(){
    this.showName=this.name;
    //this.current_location = this.sanitizer.bypassSecurityTrustUrl(window.location.href);
    this.getUrl(window.location.href+'?name=' + this.showName);
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

getUrl(current_location:String){

  this.whatsAppUrl = this.sanitizer.bypassSecurityTrustResourceUrl('whatsapp://send?text=' + current_location);

}

}
