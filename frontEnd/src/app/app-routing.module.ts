import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewEventComponent} from './new-event/new-event.component';
import {TestuploadsComponent} from './checkEvent/testuploads.component';
import {ExtraHeaderComponent} from './Home/extra-header.component';
import {CommonModule} from '@angular/common';
import {MapRelaiComponent} from './gestionRelai/map-relai/map-relai.component';
import {ListRelaiComponent} from './gestionRelai/list-relai/list-relai.component';
import {NouveauRelaiComponent} from './gestionRelai/nouveau-relai/nouveau-relai.component';
import {ModifierRelaiComponent} from './gestionRelai/modifier-relai/modifier-relai.component';
import {EventPageComponent} from './checkEvent/carousel-event/event-page/event-page.component';
import {RoleComponent} from './role/role.component';
import {ListeArticlesComponent} from './article/liste-articles/liste-articles.component';
import {CreateArticleComponent} from './article/create-article/create-article.component';




const routes: Routes = [
  {path:'',component: ExtraHeaderComponent},
  {path: 'CreateEvent', component: NewEventComponent },
  {path: 'CheckEvent', component: TestuploadsComponent},
  {path: 'Home', component: ExtraHeaderComponent},
  {path: 'role', component: RoleComponent},
  {path: 'map', component: MapRelaiComponent},
  {path: 'listRelai', component: ListRelaiComponent},
  {path: 'nvRelai', component: NouveauRelaiComponent},
  {path: 'modifRelai/:id', component: ModifierRelaiComponent},
  {path : 'eventPage/:id', component: EventPageComponent},
  {path : 'article', component: ListeArticlesComponent},
  {path : 'createArticle', component: CreateArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
