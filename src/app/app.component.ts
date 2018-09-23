import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Java/Spring Boot/Angular';
  writer: Observable<any>
  constructor(private httpClient: HttpClient) { 
  } 

  ngOnInit() {
    this.getSaveValues();
}

  getSaveValues(){
    this.getFullResponseForWriter().subscribe(
      res => { 
	      this.writer = res.body;
     	      console.log(this.writer);
    	      console.log(res.headers.get('Content-Type'));			  
      },
      err => {
	      console.log(err);
      }
   ); 
  }
  getFullResponseForWriter(): Observable<any> {
    return this.httpClient.get('/api/saveValues', {
     observe: 'response'
   });
}
}
