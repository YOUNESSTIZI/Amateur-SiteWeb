import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ExtraHeaderComponent} from '../Home/extra-header.component';
import {TestuploadsComponent} from '../checkEvent/testuploads.component';
import {NewEventComponent} from '../new-event/new-event.component';
import {ListRelaiComponent} from '../gestionRelai/list-relai/list-relai.component';
import {MapRelaiComponent} from '../gestionRelai/map-relai/map-relai.component';
import {NouveauRelaiComponent} from '../gestionRelai/nouveau-relai/nouveau-relai.component';
import {RoleComponent} from '../role/role.component';
import {ListeArticlesComponent} from '../article/liste-articles/liste-articles.component';
import {CreateArticleComponent} from '../article/create-article/create-article.component';





@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  HomeClick() {
    // @ts-ignore
    this.router.navigate(["Home"],ExtraHeaderComponent);

  }

  CheckEventClick() {
    // @ts-ignore
    this.router.navigate(["CheckEvent"],TestuploadsComponent);
  }

  NewEventClick() {
    // @ts-ignore
    this.router.navigate(["CreateEvent"],NewEventComponent);
  }
  mapClick() {
    // @ts-ignore
    this.router.navigate(["map"],MapRelaiComponent);
  }

  listRelaiClick() {
    // @ts-ignore
    this.router.navigate(["listRelai"],ListRelaiComponent);
  }

  NouveauRelaiClick() {
    // @ts-ignore
    this.router.navigate(["nvRelai"],NouveauRelaiComponent);

  }

  roleClick() {
    // @ts-ignore
    this.router.navigate(["role"],RoleComponent);
  }

  ArticlesClick() {
    // @ts-ignore
    this.router.navigate(["article"],ListeArticlesComponent);
  }

  NouveauArticleClick() {
    // @ts-ignore
    this.router.navigate(["createArticle"],CreateArticleComponent);
  }
}
