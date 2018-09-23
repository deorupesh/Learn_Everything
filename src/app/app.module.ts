import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { JavaComponentComponent } from './java-component/java-component.component';
import { SpringComponentComponent } from './spring-component/spring-component.component';
import { SpringBootComponentComponent } from './spring-boot-component/spring-boot-component.component';
import { HibernateComponentComponent } from './hibernate-component/hibernate-component.component';
import { InterviewComponentComponent } from './interview-component/interview-component.component';
import { DatabaseComponentComponent } from './database-component/database-component.component';
import { HadoopComponentComponent } from './hadoop-component/hadoop-component.component';
import { JavascriptComponentComponent } from './javascript-component/javascript-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JavaComponentComponent,
    SpringComponentComponent,
    SpringBootComponentComponent,
    HibernateComponentComponent,
    InterviewComponentComponent,
    DatabaseComponentComponent,
    HadoopComponentComponent,
    JavascriptComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
