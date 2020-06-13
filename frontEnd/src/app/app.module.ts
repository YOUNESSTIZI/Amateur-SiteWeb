import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { NewEventComponent } from './new-event/new-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import { NgxQuillModule } from '@dimpu/ngx-quill'
import { TestuploadsComponent } from './checkEvent/testuploads.component';
import {MethodsService} from './service/methods.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DateSetComponent } from './new-event/date-set/date-set.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselEventComponent } from './checkEvent/carousel-event/carousel-event.component';
import { MenuLeftComponent } from './checkEvent/menu-left/menu-left.component';
import { CommentsComponent } from './checkEvent/comments/comments.component';
import { CarouselProductComponent } from './checkEvent/carousel-product/carousel-product.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { EventComponent } from './checkEvent/carousel-event/event/event.component';
import { ExtraHeaderComponent } from './Home/extra-header.component';
import { ConnexionComponent } from './Home/connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {AuthService} from './service/auth.service';
import {AuthInterceptor} from './auth-interceptor/auth-interceptor.component';
import { EmailVerifComponent } from './inscription/email-verif/email-verif.component';
import { Header2Component } from './header2/header2.component';

import {AgmCoreModule} from '@agm/core';

import {RelaiService} from './service/relai.service';
import {ListRelaiComponent} from './gestionRelai/list-relai/list-relai.component';
import {MapRelaiComponent} from './gestionRelai/map-relai/map-relai.component';
import {ModifierRelaiComponent} from './gestionRelai/modifier-relai/modifier-relai.component';
import {NouveauRelaiComponent} from './gestionRelai/nouveau-relai/nouveau-relai.component';
import { EventPageComponent } from './checkEvent/carousel-event/event-page/event-page.component';
import { RoleComponent } from './role/role.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ListeArticlesComponent } from './article/liste-articles/liste-articles.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewEventComponent,
    TestuploadsComponent,
    DateSetComponent,
    CarouselEventComponent,
    MenuLeftComponent,
    CommentsComponent,
    CarouselProductComponent,
    EventComponent,
    ExtraHeaderComponent,
    ConnexionComponent,
    InscriptionComponent,
    EmailVerifComponent,
    Header2Component,
    ListRelaiComponent,
    MapRelaiComponent,
    ModifierRelaiComponent,
    NouveauRelaiComponent,
    EventPageComponent,
    RoleComponent,
    CreateArticleComponent,
    ListeArticlesComponent,





  ],
  imports: [
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule,
    QuillModule.forRoot(),
    NgxQuillModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTIn22N0OJ6j4PjvTkqi8ROqN_XhKZUyQ'
    }),




  ],
  providers: [
    MethodsService,AuthService,RelaiService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
