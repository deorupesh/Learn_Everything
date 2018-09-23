import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'java', component: JavaComponentComponent, data: { title: 'Java' }
  },
  {
    path: 'javascript', component: JavascriptComponentComponent, data: { title: 'JavaScript' }
  },
  {
    path: 'database', component: DatabaseComponentComponent, data: { title: 'DataBase' }
  },
  {
    path: 'spring', component: SpringComponentComponent, data: { title: 'Spring' }
  },
  {
    path: 'springboot', component: SpringBootComponentComponent, data: { title: 'Spring Boot' }
  },
  {
    path: '', redirectTo: '/java', pathMatch: 'full'
  },
  // {
  //   path: '**', component: PageNotFoundComponent
  // }
];

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
    BrowserModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
