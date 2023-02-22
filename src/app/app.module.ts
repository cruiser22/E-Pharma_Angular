import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './jwt.interceptor';


=======
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> bfe3d74c12cb78146a5f18ae45825aef80192474

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AuthentificationComponent,
  
    
 
=======
    ChoixProduitsComponent
>>>>>>> bfe3d74c12cb78146a5f18ae45825aef80192474
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
=======
    FormsModule,
    HttpClientModule,
    NgbModule
>>>>>>> bfe3d74c12cb78146a5f18ae45825aef80192474
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
