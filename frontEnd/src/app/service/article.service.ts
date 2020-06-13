import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Article} from "../models/Article";

import {Subject} from "rxjs";


const BACKEND_URL = "http://localhost:5000/"; // A verifier
@Injectable({
  providedIn:'root'
})
export class ArticleService {
  allArticles: Array<Article>= [];
  allArticleSubject = new Subject<Article[]>();
  articles: Array<Article>= [];
  articleSubject = new Subject<Article[]>();
  articleMember :Array<Article>;
  articleMemberSubject =new Subject<Article[]>();
  constructor(private http: HttpClient,private router:Router) {

  }




  addArticle(title: string, description: string, file: File,creator:string) {
    const articleData = new FormData();
    articleData.append("title", title);
    articleData.append("description", description);
    articleData.append("articleFile", file);
    articleData.append("creator", creator);
    // @ts-ignore
    this.http
      .post<{ message: string; article: Article }>(
        BACKEND_URL+"articles",
        articleData
      )
      .subscribe(responseData => {
        this.getAllArticleFromServer();
        this.getArticleFromServer();
        window.alert(responseData.message)
        this.router.navigate(["/my-articles"]);
      },(error)=>{
          console.log(error);
        });
  }
  getAllArticleFromServer(){
    this.http.get(BACKEND_URL+'allArticles').subscribe((articles : any[])=>{
      this.allArticles = articles;
      this.emitAllArticlesSubject();
    });
  }


  emitAllArticlesSubject() {
    this.allArticleSubject.next(this.allArticles.slice())
  }
  getArticleByIdFromServer(articleId: string) {
    return this.http.get<{message: string, result:any}>(BACKEND_URL+"articles/"+articleId);
  }
  updateVuArticle(articleId:string){
    let articleFetched: Article;
     this.getArticleByIdFromServer(articleId).subscribe((result:any)=>{
      articleFetched=result.article;
      this.http
        .put(BACKEND_URL+"articles/" + articleId+"/vu", articleFetched)
        .subscribe(response => {
          this.router.navigateByUrl('articles/'+articleId);
        });
    })

  }
  getArticleFromServer(){
    this.http.get(BACKEND_URL+'articles').subscribe((articles : any[])=>{
      this.articles = articles;
      this.emitArticlesSubject();
    });
  }


  emitArticlesSubject() {
    this.articleSubject.next(this.articles.slice())
  }
  updateStateArticle(id:string,title:string,description:string,dateCreate:Date,filePath:string,vu:number,creator:string,state:string){
    const articleData=new Article(id,title,description,filePath,vu,creator,dateCreate,state);
    this.http
      .put(BACKEND_URL+"articles/" + id+"/state", articleData)
      .subscribe((response:any)=> {
        this.getAllArticleFromServer();
        this.getArticleFromServer();
        this.getArticlesByCreatorFromServer(creator)
       window.alert(response.message);
      });
  }

  getArticlesByCreatorFromServer(idCreator:string){
   this.http.get(BACKEND_URL+'articles/members/'+idCreator).subscribe((result:any)=>{
     this.articleMember=result.articles;
     this.emitArticlesMemberSubject()
   })
  }
  emitArticlesMemberSubject(){
    this.articleMemberSubject.next(this.articleMember.slice());
  }
  deleteArticle(idArticle: string) {
    let articleFetched: Article;
    this.getArticleByIdFromServer(idArticle).subscribe((result:any)=>{
      articleFetched=result.article;
    })
    this.http.delete(BACKEND_URL+"articles/" + idArticle).subscribe((result : any)=>{
      this.getArticlesByCreatorFromServer(articleFetched.creator);
      this.getAllArticleFromServer();
      window.alert(result.message);
    });



  }
  updateArticle(idArticle: string,creator: string, title: string, description: string,file: File ){
    let articleData = new FormData();
    articleData.set('title',title);
    articleData.set('description',description);
    articleData.set('creator',creator);
    if(file){
      articleData.set('file',file);
    }

    this.http
      .put(BACKEND_URL+"articles/" + idArticle, articleData)
      .subscribe((response:any) => {
        window.alert(response.message);
        this.router.navigate(["/my-articles"]);
      });
  }
  updateArticleFromAdmin(idArticle: string,creator: string, title: string, description: string,file: File,state:string) {
    let articleData = new FormData();
    articleData.set('title',title);
    articleData.set('description',description);
    articleData.set('creator',creator);
    articleData.set('state',state);
    if(file){
      articleData.set('file',file);
    }

    this.http
      .put(BACKEND_URL+"articles/" + idArticle+'/admin', articleData)
      .subscribe((response:any) => {
        window.alert(response.message);
        this.router.navigate(["/admin-articles"]);
      });
  }

}
