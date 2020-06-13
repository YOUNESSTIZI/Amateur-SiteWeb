import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";

import {ArticleService} from "../../service/article.service";
import {Article} from "../../models/Article";


import {User} from "../../models/User.model";
import {Router} from "@angular/router";
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.scss']
})
export class ListeArticlesComponent implements OnInit {
  articleSubscription : Subscription;
  articles: Array<Article> = [];
  memberIndicatif: string ;
  memberSubscription : Subscription;
  members : Array<User>;
  constructor(private articleService: ArticleService,private router:Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.articleService.getArticleFromServer();
    this.articleSubscription = this.articleService.articleSubject.asObservable().subscribe((result: any) => {
      this.articles = result;
    })
    this.articleService.emitArticlesSubject();
   // this.auth.getMembersFromServer();//retourner tous les utilisateurs !
   // this.memberSubscription = this.memberService.membersSubject.subscribe((result: User[])=>{
   //   this.members=result;
    //})

  }

  getIndicatif(creator: string) {

    for(let member of this.members){
      if(member._id==creator){
        return member.userName;
      }
    }
  }

  updateVu(articleId: string) {
    this.articleService.updateVuArticle(articleId);


  }
}
